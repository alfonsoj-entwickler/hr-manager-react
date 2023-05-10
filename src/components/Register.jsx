const Register = ({ customer }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Name of customer"
          name="name"
          defaultValue={customer?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="company">
          Company:
        </label>
        <input
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Company of customer"
          name="company"
          defaultValue={customer?.company}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email of customer"
          name="email"
          defaultValue={customer?.email}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="phone">
          Phone:
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Phone of customer"
          name="phone"
          defaultValue={customer?.phone}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notes">
          Notes:
        </label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notes of customer"
          name="notes"
          defaultValue={customer?.notes}
        />
      </div>
    </>
  );
};

export default Register;
