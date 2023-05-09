import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Register from "../components/Register";
import Error from "../components/Error";
import { addCustomer } from "../api/customers";

export async function action({request}) {
    const registerData = await request.formData()
    const data = Object.fromEntries(registerData)

    const email = registerData.get('email')

    // validation
    const errors = []
    if( Object.values(data).includes('') ) {
        errors.push('All fields are mandatory.')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if( !regex.test(email)) {
        errors.push('The e-mail address is not valid.')
    }
    // return data if there are some errors
    if( Object.keys(errors).length) {
        return errors
    }

    await addCustomer(data)

    return redirect('/')
}

function NewCostumer() {
    const navigate = useNavigate();
    const errorsRegister = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New customer</h1>
      <p className="mt-4">Fill in all fields to create a new customer.</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-800 text-white px-4 py-2 font-bold uppercase hover:bg-blue-500 transition-all ease-in"
          onClick={ ()=> navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errorsRegister?.length && (
            errorsRegister.map( (error, i) => <Error key={i}>{error}</Error>)
        )}
        <Form
            method="post"
        >
            <Register />
            <input type='submit' className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer hover:bg-blue-600 transition-all ease-in" value='Register customer' />
        </Form>
      </div>
    </>
  );
}

export default NewCostumer;
