import { useLoaderData } from "react-router-dom";
import Customer from "../components/Customer";
import { getCustomers } from "../api/customers";

export function loader() {
    const customers = getCustomers() 
    return customers
}

function Index () {
    const customersData = useLoaderData();

    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Customers</h1>
            <p className="mt-4">Manager the customers</p>
            {customersData.length && (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Customer</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customersData.map( customer => (
                            <Customer 
                                customerData={customer}
                                key={customer.id}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Index;