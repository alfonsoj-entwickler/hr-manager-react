import { useLoaderData } from "react-router-dom";
import Customer from "../components/Customer";

export function loader() {
    // ToDo: call to api and get customers
    const customersData = [
        {
            id: 1,
            name: 'Manolo',
            phone: 102013313,
            email: "manolo@test.ag",
            company: 'Company 102013'
        },
        {
            id: 2,
            name: 'Karen',
            phone: 138198313,
            email: "marta@test.ag",
            company: 'Company 138198'
        },
        {
            id: 3,
            name: 'Josue',
            phone: 31983913,
            email: "josue@test.ag",
            company: 'Company 319839'
        },
        {
            id: 4,
            name: 'Miguel',
            phone: 319381983,
            email: "miguel@test.ag",
            company: 'Company 319381'
        },
        {
            id: 5,
            name: 'Pedro',
            phone: 1398198938,
            email: "pedro@test.ag",
            company: 'Company 139819'
        },
    ];
    return customersData;
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