using Versta.OrderApi.BusinessLogic.Dtos;

namespace Versta.OrderApi.BusinessLogic.Contracts;

public interface IOrderService
{
    public Task<IEnumerable<OrderDto>> GetOrders();
    public Task<OrderDto> GetOrderById(Guid orderId);
    public Task CreateOrder(CreateOrderDto order);
}