import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import schemaAppoinment from '../../../../validation/appoinment';
import apiRequest from '../../../../configs/axios';
import dayjs from 'dayjs';
import jalaliMoment from 'jalali-moment';
import convertPersianToEnglishNumbers from '../../../../utils/toEnglishNumber';
import Swal from 'sweetalert2';


function AppoinmentSection() {

    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaAppoinment) // استفاده از resolver برای اتصال yup به react-hook-form
    });




    const onSubmit = async ({ name, phone, date, time }) => {
        try {
            // تبدیل تاریخ شمسی به میلادی
            const englishDate = convertPersianToEnglishNumbers(date); // تبدیل اعداد فارسی به انگلیسی
            const gregorianDate = jalaliMoment(englishDate, 'jYYYY/jMM/jDD').format('YYYY/MM/DD');

            // اطمینان از فرمت زمان به شکل HH:mm
            const formattedTime = dayjs(`1970-01-01T${time}`, 'HH:mm').format('HH:mm');

            // ارسال درخواست به سرور
            const response = await apiRequest.get(`SetNobat.aspx`, {
                params: {
                    phone,
                    name,
                    time: formattedTime, // زمان به فرمت صحیح
                    date: gregorianDate, // تاریخ میلادی
                },
            });

            const data = await response.data;
            if (data === "1") {
                reset(); //reset form
                Swal.fire({
                    title: "رزور نوبت",
                    text: "نوبت شما با موفقیت ثبت شد.",
                    icon: "success",
                    denyButtonText: "باشه"
                });
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
        <section id='appointment' className="appoinment pt_185 xs_pt_70 pb_100 xs_pb_70" style={{ direction: "rtl" }}>
            <div className="container">
                <div className="appoinment_bg" style={{ background: "url(images/appointment_bg.jpg)" }}>
                    <div className="appoinment_overlay">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 wow fadeInLeft" data-wow-duration="1s">
                                <div className="appoinment_form">
                                    <div className="common_heading mb_30">
                                        <h5>نوبت دهی</h5>
                                        <h2>ثبت درخواست رزرو رایگان</h2>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            {/* نام و نام خانوادگی */}
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="appoinment_form_input">
                                                    <Controller
                                                        control={control}
                                                        name="name"
                                                        defaultValue=""
                                                        render={({ field }) => (
                                                            <input
                                                                {...field}
                                                                type="text"
                                                                placeholder="نام و نام خانوادگی بیمار"
                                                            />
                                                        )}
                                                    />
                                                    {errors.name && <p style={{ color: "red", fontSize: "16px" }}>{errors.name.message}</p>}
                                                </div>
                                            </div>

                                            {/* شماره تلفن */}
                                            <div className="col-12 col-lg-6 col-sm-6">
                                                <div className="appoinment_form_input">
                                                    <Controller
                                                        control={control}
                                                        name="phone"
                                                        defaultValue=""
                                                        render={({ field }) => (
                                                            <input
                                                                {...field}
                                                                type="text"
                                                                inputMode="tel"
                                                                placeholder="شماره همراه"
                                                            />
                                                        )}
                                                    />
                                                    {errors.phone && <p style={{ color: "red", fontSize: "16px" }}>{errors.phone.message}</p>}
                                                </div>
                                            </div>

                                            {/* ساعت */}
                                            <div className="col-12 col-lg-6 col-sm-6">
                                                <Controller
                                                    control={control}
                                                    name="time"
                                                    render={({ field }) => (
                                                        <DatePicker
                                                            {...field}
                                                            hideOnScroll
                                                            value={field.value || ""}
                                                            containerStyle={{
                                                                width: "100%"
                                                            }}
                                                            style={{
                                                                width: "100%", // تغییر به 100% برای عرض کامل
                                                                border: "none",
                                                                height: "50px",
                                                                borderRadius: "9999px",
                                                                marginTop: "20px",
                                                                padding: "0 20px 0 20px"
                                                            }}
                                                            disableDayPicker // غیرفعال کردن روزها
                                                            format="HH:mm" // فقط ساعت و دقیقه را نشان می‌دهد
                                                            placeholder="ساعت" // Placeholder
                                                            plugins={[<TimePicker />]} // فقط زمان را نشان می‌دهد
                                                            calendar={persian} // تنظیم تقویم فارسی
                                                            locale={persian_fa} // زبان فارسی
                                                            calendarPosition="bottom-right" // موقعیت تقویم
                                                            onlyTime={true} // فقط زمان (ساعت و دقیقه) را نمایش دهد
                                                            maxTime="23" // حداکثر زمان برای ساعت و دقیقه (در 24 ساعت)
                                                            minTime="00" // حداقل زمان
                                                        />
                                                    )}
                                                />
                                                {errors.time && <p style={{ color: "red", fontSize: "16px" }}>{errors.time.message}</p>}
                                            </div>

                                            {/* تاریخ */}
                                            <div className="col-lg-6 col-sm-6">
                                                <Controller
                                                    control={control}
                                                    name="date"
                                                    render={({ field }) => (
                                                        <DatePicker
                                                            hideOnScroll
                                                            {...field}
                                                            className='date_picker'
                                                            value={field.value || null}
                                                            containerStyle={{
                                                                width: "100%"
                                                            }}
                                                            style={{
                                                                width: "100%", // تغییر به 100% برای عرض کامل
                                                                border: "none",
                                                                height: "50px",
                                                                borderRadius: "9999px",
                                                                marginTop: "20px",
                                                                padding: "0 20px 0 20px"
                                                            }}
                                                            placeholder="روز / ماه / سال"
                                                            format={"YYYY/MM/DD"}
                                                            calendar={persian}
                                                            locale={persian_fa}
                                                            minDate={Date.now()}
                                                        />
                                                    )}
                                                />
                                                {errors.date && <p style={{ color: "red", fontSize: "16px" }}>{errors.date.message}</p>}
                                            </div>

                                            {/* دکمه ارسال */}
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="appoinment_form_input">
                                                    <button type='submit' className="common_btn">ثبت درخواست رزور</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="appoinment_img">
                                    <img src="images/appoinment_img.png" alt="appointment" className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppoinmentSection;
