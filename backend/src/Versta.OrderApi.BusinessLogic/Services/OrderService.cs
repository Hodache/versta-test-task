using Versta.OrderApi.BusinessLogic.Contracts;
using Versta.OrderApi.BusinessLogic.Dtos;
using Versta.OrderApi.BusinessLogic.Exceptions;
using Versta.OrderApi.DataAccess.Contracts;

namespace Versta.OrderApi.BusinessLogic.Services;

public class OrderService(IOrderRepository orderRepository) : IOrderService
{
    private readonly IOrderRepository _orderRepository = orderRepository;
    
    public async Task<IEnumerable<OrderDto>> GetOrders()
    {
        var orders = await _orderRepository.GetAllAsync();
        return orders.Select(Mapper.ToOrderDto);
    }

    public async Task<OrderDto> GetOrderById(Guid orderId)
    {
        var order = await _orderRepository.GetByIdAsync(orderId);
        
        if (order == null)
            throw new ExistenceException($"Order with id: {orderId} does not exist");
        
        return Mapper.ToOrderDto(order);
    }

    public async Task CreateOrder(CreateOrderDto order)
    {
        if (order.CityFrom == "" || order.CityTo == "")
            throw new ValidationFailureException($"No city provided");
        
        if (order.AddressFrom == "" || order.AddressTo == "")
            throw new ValidationFailureException($"No address provided");
        
        if (order.Weight < 0.01)
            throw new ValidationFailureException($"Weight must be at least 0.01 kg");

        await _orderRepository.CreateAsync(Mapper.ToOrder(order));
    }
}