import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import schemaAnswerOrQuestion from '../../../../validation/answerOrQuestion';
import apiRequest from '../../../../configs/axios';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function AddQuestion({ isPrivateForDoctor, detailsReplyUser, setDeatilsReplyUser }) {
  const queryClient = useQueryClient();
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaAnswerOrQuestion) // استفاده از resolver برای اتصال yup به react-hook-form
  });




  const onSubmit = async ({ name, phone, decription, isPrivateForDR }) => {
    try {
      // ارسال درخواست به سرور
      const response = await apiRequest.get(`SetDidgah.aspx`, {
        params: {
          phone,
          name,
          decription,
          isPrivateForDR,
          replayId: detailsReplyUser ? detailsReplyUser.replayId : 0
        },
      });

      const data = await response.data;

      if (data === "1") {
        queryClient.invalidateQueries({ queryKey: ["Get_ListDidgah"] })
        Swal.fire({
          title: "ثبت دیدگاه",
          text: "دیدگاه شما با موفقیت ثبت شد.",
          icon: "success",
          denyButtonText: "باشه"
        });
        reset(); //reset form
        setDeatilsReplyUser(null);
      } else if (data === "0") {
        Swal.fire({
          title: "خطا",
          text: "مقادیر را به درستی وارد کنید.",
          icon: "error",
          denyButtonText: "باشه"
        });
      } else {
        Swal.fire({
          title: "خطا",
          text: "خطا در ارتباط با سرور.",
          icon: "error",
          denyButtonText: "باشه"
        });
      }
    } catch (error) {
      console.error("Error while sending data:", error.message);
    }
  };



  return (
    <form style={{ direction: "rtl" }} onSubmit={handleSubmit(onSubmit)} id='addQuestion' className="comment_input_area">
      <div className='title'>
        <h2>ارسال دیدگاه
        </h2>
        {detailsReplyUser && (
          <div style={{ marginRight: "10px", fontSize: "16px" }}>
            <span >(پاسخ به {detailsReplyUser.name})</span>
            <button style={{ margin: "0px" }} onClick={() => setDeatilsReplyUser(null)} className='remove_reply-icon'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-xl-6">
          <input
            {...register('name')}
            type="text"
            name="name"
            placeholder="نام..." />
          {errors.name && <p style={{ color: "red", fontSize: "16px" }}>{errors.name.message}</p>}
        </div>
        <div className="col-xl-6">
          <input
            {...register('phone')}
            type="text"
            inputMode='tel'
            placeholder="شماره همراه..."
            name="phone"
          />
          {errors.phone && <p style={{ color: "red", fontSize: "16px" }}>{errors.phone.message}</p>}
        </div>

        <div className="col-xl-12 mt-4 mb-4">
          <textarea
            {...register('decription')}
            rows="4"
            placeholder="ارسال دیدگاه..."
            name="decription"
          ></textarea>
          {errors.decription && <p style={{ color: "red", fontSize: "16px" }}>{errors.decription.message}</p>}
        </div>
        <div className="col-12">
          <label className='checkbox-controller' htmlFor="isPrivateForDR">
            <span>
              فقط به صورت خصوصی برای دکتر نمایش داده شود
            </span>
            <input
              {...register('isPrivateForDR')}
              type="checkbox"
              checked={isPrivateForDoctor}
              disabled={isPrivateForDoctor}
              name="isPrivateForDR"
              id='isPrivateForDR'
            />
          </label>
        </div>
        <div className="col-xl-12">
          <button type='submit' to="#" className="common_btn">ارسال سریع</button>
        </div>
      </div>
    </form>
  );
}

export default AddQuestion;
