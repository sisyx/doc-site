import * as yup from 'yup';

const schemaAnswerOrQuestion = yup.object({
    name: yup.string()
        .matches(/^[\u0600-\u06FF\s]+$/, "نام و نام خانوادگی باید فقط حروف فارسی باشد")  // فقط حروف فارسی
        .min(3, "نام و نام خانوادگی باید حداقل 3 کاراکتر باشد") // حداقل طول 3 کاراکتر
        .max(50, "نام و نام خانوادگی نباید بیشتر از 50 کاراکتر باشد") // حداکثر طول 50 کاراکتر
        .required("نام و نام خانوادگی الزامی است"),

    // اعتبارسنجی شماره تلفن که باید با 09 شروع و 11 رقم باشد
    phone: yup.string()
        .matches(/^09\d{9}$/, "شماره تلفن باید با 09 شروع شده و 11 رقم باشد")
        .required("شماره تلفن الزامی است"),

    decription: yup.string()
        .matches(/^[\u0600-\u06FF\s]+$/, "دیدگاه باید فقط حروف فارسی باشد")  // فقط حروف فارسی
        .min(5, "دیدگاه باید حداقل 5 کاراکتر باشد") // حداقل طول 5 کاراکتر
        .max(200, "دیدگاه نباید بیشتر از 200 کاراکتر باشد") // حداکثر طول 200 کاراکتر
        .required("دیدگاه الزامی است"),
    isPrivateForDR: yup.boolean().required()
}).required();

export default schemaAnswerOrQuestion;