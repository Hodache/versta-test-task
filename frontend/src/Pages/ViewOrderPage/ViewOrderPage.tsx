import { useEffect, useState } from 'react';
import { OrderInfo } from '../../Models/OrderInfo';
import { getOrderById } from '../../Api/api';
import Navigation from '../../Components/Navigation/Navigation';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { useParams } from 'react-router-dom';



const ViewOrderPage = () => {
    const params = useParams<{ id: string }>();
    const [order, setOrder] = useState<OrderInfo | undefined>(undefined);

    useEffect(() => {
        if (params.id !== undefined) {
            const fetchData = async () => {
                const data = await getOrderById(params.id!);
                if (typeof data === "string") {
                    alert(data);
                    return;
                }

                setOrder(data);
            }
            fetchData();
        }
    }, []);

    return (
        <div>
            <Navigation />

            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                    {order === undefined ?
                        <p>Не удалось загрузить заказ с ID {params.id}. Попробуйте снова или проверьте правильность ID.</p> :
                        <OrderCard order={order} />}
                </div>
            </div>
        </div>
    );
}

export default ViewOrderPage;