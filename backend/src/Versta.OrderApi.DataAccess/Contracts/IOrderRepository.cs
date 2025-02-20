using Versta.OrderApi.DataAccess.Models;

namespace Versta.OrderApi.DataAccess.Contracts;

public interface IOrderRepository
{
    public Task<IEnumerable<Order>> GetAllAsync();
    public Task<Order?> GetByIdAsync(Guid id);
    public Task CreateAsync(Order order);
}