import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'

const FormContainer = () => {
    const schema = Yup.object().shape({
        firstName: Yup.string()
            .required("First Name cannot be empty")
            .min(2, "First Name must be at least 2 characters")
            .matches(/^[A-Za-z]+$/, "First Name must contain only letters"),
        lastName: Yup.string()
            .required("Last Name cannot be empty")
            .min(2, "Last Name must be at least 2 characters")
            .matches(/^[A-Za-z]+$/, "Last Name must contain only letters"),
        email: Yup.string()
            .required("Email can not be empty")
            .email("Looks like this is not an email"),            
        password: Yup.string()
            .required("Password can not be empty")
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
    })

    return (
        <div className="p-10 bg-white rounded-[10px] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.1469)] max-sm:p-6 leading-6.5">
            <Formik
                initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
                validationSchema={schema}
                onSubmit={(values, { resetForm }) => { 
                    localStorage.setItem('user', JSON.stringify(values));
                    resetForm();
                 }}
            >
                {({errors, touched}) => (
                    <Form className="flex flex-col gap-5 max-sm:gap-4">
                    <div className="relative flex flex-col gap-1.5">
                        <Field name="firstName" placeholder="First Name" className={`py-3.75 border rounded-[5px] border-[rgba(222,222,222,1)] px-8 placeholder:text-[#3d3b4870] text-[rgba(61,59,72,1)] font-semibold text-[14px] tracking-[0.25px] focus:outline-none focus:ring-1 focus:ring-[rgba(94,84,164,1)] ${errors.firstName && touched.firstName ? 'border-[rgba(255,121,121,1)] border-2 text-[rgba(255,121,121,1)] placeholder:text-[#ff7979a0] focus:ring-[rgba(255,121,121,1)]' : ''}`}></Field>
                        {errors.firstName && touched.firstName && <img src="/images/error.svg" className="absolute right-6.75 top-4 max-w-full" alt="" />}
                        <ErrorMessage name="firstName" component="p" className="text-[rgba(255,121,121,1)] text-right font-medium text-[11px] leading-[100%] italic" />
                    </div>
                    <div className="relative flex flex-col gap-1.5">
                        <Field name="lastName" placeholder="Last Name" className={`py-3.75 border rounded-[5px] border-[rgba(222,222,222,1)] px-8 placeholder:text-[#3d3b4870] text-[rgba(61,59,72,1)] font-semibold text-[14px] tracking-[0.25px] focus:outline-none focus:ring-1 focus:ring-[rgba(94,84,164,1)] ${errors.lastName && touched.lastName ? 'border-[rgba(255,121,121,1)] border-2 text-[rgba(255,121,121,1)] placeholder:text-[#ff7979a0] focus:ring-[rgba(255,121,121,1)]' : ''}`}></Field>
                        {errors.lastName && touched.lastName && <img src="/images/error.svg" className="absolute right-6.75 top-4 max-w-full" alt="" />}
                        <ErrorMessage name="lastName" component="p" className="text-[rgba(255,121,121,1)] text-right font-medium text-[11px] leading-[100%] italic" />
                    </div>
                    <div className="relative flex flex-col gap-1.5">
                        <Field name="email" placeholder="Email" type="email" className={`py-3.75 border rounded-[5px] border-[rgba(222,222,222,1)] px-8 placeholder:text-[#3d3b4870] text-[rgba(61,59,72,1)] font-semibold text-[14px] tracking-[0.25px] focus:outline-none focus:ring-1 focus:ring-[rgba(94,84,164,1)] ${errors.email && touched.email ? 'border-[rgba(255,121,121,1)] border-2 text-[rgba(255,121,121,1)] placeholder:text-[#ff7979a0] focus:ring-[rgba(255,121,121,1)]' : ''}`}></Field>
                        {errors.email && touched.email && <img src="/images/error.svg" className="absolute right-6.75 top-4 max-w-full" alt="" />}
                        <ErrorMessage name="email" component="p" className="text-[rgba(255,121,121,1)] text-right font-medium text-[11px] leading-[100%] italic" />
                    </div>  
                    <div className="relative flex flex-col gap-1.5">
                        <Field name="password" placeholder="Password" type="password" className={`py-3.75 border rounded-[5px] border-[rgba(222,222,222,1)] px-8 placeholder:text-[#3d3b4870] text-[rgba(61,59,72,1)] font-semibold text-[14px] tracking-[0.25px] focus:outline-none focus:ring-1 focus:ring-[rgba(94,84,164,1)] ${errors.password && touched.password ? 'border-[rgba(255,121,121,1)] border-2 text-[rgba(255,121,121,1)] placeholder:text-[#ff7979a0] focus:ring-[rgba(255,121,121,1)]' : ''}`}></Field>
                        {errors.password && touched.password && <img src="/images/error.svg" className="absolute right-6.75 top-4 max-w-full" alt="" />}
                        <ErrorMessage name="password" component="p" className="text-[rgba(255,121,121,1)] text-right font-medium text-[11px] leading-[100%] italic" />
                    </div>              

                    <button type="submit" className="w-full bg-[rgba(56,204,139,1)] text-center p-3.75 shadow-[inset_0px_-4px_0px_0px_rgba(0,0,0,0.0909)] rounded-[5px] font-semibold text-[15px] tracking-normal text-white hover:bg-[rgba(119,226,179,1)] hover:shadow-[inset_0px_-4px_0px_0px_rgba(0,0,0,0.0909)]">CLAIM YOUR FREE TRIAL</button>
                </Form>
                )}
            </Formik>
            <p className="text-[rgba(186,183,212,1)] font-medium text-[11px] tracking-normal text-center px-4 mt-2">By clicking the button, you are agreeing to our <span className="text-[rgba(255,121,121,1)]">Terms and Services</span></p>
        </div>
    )
}

export default FormContainer