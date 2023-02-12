import React, { useState } from "react";
import Input from "./assets/Input";
import PageContainer from "./assets/PageContainer";
import isEmail from "isemail"
import { PageTitle } from "./assets/Text";

function ContactUs() {
  return (
    <PageContainer className={`flex justify-center`}>
      <div className={`flex flex-col justify-center w-[450px]`}>
        <PageTitle title={`Contact us`} />
        <ContactForm />
      </div>
    </PageContainer>
  );
}

export default ContactUs;

function ContactForm() {
    const [values, setValues] = useState({
        name:"",
        email:"",
        location:""
    })
    const [error, setError] = useState("")
  const formInput = [
    {
      id: 1,
      type: "text",
      placeholder: "Enter your name",
      name: "name",
      errormsg: "Name cannot be blank",
      label: "Name",
    },
    {
      id: 2,
      type: "email",
      placeholder: "Enter your email address",
      name: "email",
      errormsg: "emial must be a valid mail address",
      label: "Email",
    },
    {
      id: 3,
      type: "text",
      placeholder: "Enter your Location",
      name: "location",
      label: "Address",
    },
  ];

  const handleInput = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
    console.log(values)
  }

  return (
    <form>
      {formInput.map((element, i) => {
        return <Input key={element.id} {...element} value={values[element.name]} onChange={handleInput}/>;
      })}
    </form>
  );
}
