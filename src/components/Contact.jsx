import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import { Toaster , toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Contact = () => {

    const [formData , setFormData ] = useState({
        name:"",
        email:"",
        message:"",
    });

    //to show the error messages
    const [errors , setErrors] = useState({})
    
    //to enable and disable send button
    const [isSending , setIsSending] = useState(false)

    const handleChange = (e) =>{
        const {name , value} = e.target ;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    // validating the email
    const validate = (e) =>{
        let errors = {};
        if(!formData.name)
            errors.name = "Name is required";

        if(!formData.email)
            errors.email = "Email is required";
        else if( !/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = "Email is invalid";
        }

        if(!formData.message)
            errors.message = "Message is required";

        return errors;
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        const validationErrors = validate();

        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }
        else{
            setErrors({});
            setIsSending(true);  
            
            emailjs.send(            // receiving email from viewers to personal Gmail ID using emailjs API
                "service_5lb9vio",
                "template_517lldj",
                formData,
                "FZkACeflhl-N-b5ao"
            )
            .then((response) =>{
                console.log("SUCCESS !", response.status , response.text );
                toast.success("Message sent successfully !");
                setFormData({name:"" , email:"" , message:""});
            })
            .catch((error)=>{
                console.log("FAILED!",error);
                toast.error("Failed to send message. Please try again !");
            })
            .finally(()=>{
                setIsSending(false);
            })
        }

    }

  return (
    <div className='mx-auto max-w-3xl p-4' id="contact">
      <Toaster/>
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
        Let's Connect
      </h2>
      <motion.form 
      onSubmit={handleSubmit}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8 , delay:0.2 }} >
        
        <div className="mb-6">
            <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder='Name'
            onChange={handleChange}
            className='mb-2 w-full bg-zinc-800 appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none'
            />
            {errors.name && (
                <motion.p
                initial={{ opacity:0 }}
                whileInView={{ opacity:1 }}
                aria-live="polite" className='text-sm text-pink-700'>
                    {errors.name}
                </motion.p>
            )}    
        </div>

        <div className="mb-6">
            <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            className='mb-2 w-full bg-zinc-800 appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none'
            />
            {errors.email && (
                <motion.p
                initial={{ opacity:0 }}
                whileInView={{ opacity:1 }}
                aria-live="polite" className='text-sm text-pink-700'>
                    {errors.email}
                </motion.p>
            )}    
        </div>

        <div className="mb-6">
            <textarea 
            rows="4"
            id="message"
            name="message"
            value={formData.message}
            placeholder='Message'
            onChange={handleChange}
            className='mb-2 w-full bg-zinc-800 appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none'
            />
            {errors.message && (
                <motion.p 
                className='text-sm text-pink-700'
                initial={{ opacity:0 }}
                whileInView={{ opacity:1 }}
                aria-live="polite">
                    {errors.message}
                </motion.p>
            )}    
        </div>

        <button type="submit" className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 font-semibold text-slate-950 hover:bg-yellow-500  
            ${ isSending ? "cursor-not-allowed opacity-50":""}`}
            disabled={isSending}>
                
                {isSending? "Sending..." : "Send"}

        </button>
      </motion.form>
    </div>
  )
}

export default Contact
