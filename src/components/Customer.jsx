function Customer( {customerData} ) {

    const { name, phone, company } = customerData;
    return (
        <tr>
            <td className="pd-6 text-center">{name}</td>
            <td className="pd-6 text-center">{phone}</td>
            <td className="pd-6 text-center">{company}</td>
        </tr>
    );
}

export default Customer;