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
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="company">
          Company:
        </label>
        <input
          id="Company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Company of customer"
          name="Company"
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
        />
      </div>
    </>
  );
};

export default Register;
