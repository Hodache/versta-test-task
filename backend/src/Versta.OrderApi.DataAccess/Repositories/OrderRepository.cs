using Microsoft.EntityFrameworkCore;
using Versta.OrderApi.DataAccess.Contracts;
using Versta.OrderApi.DataAccess.Data;
using Versta.OrderApi.DataAccess.Models;

namespace Versta.OrderApi.DataAccess.Repositories;

public class OrderRepository(OrderApiContext context) : IOrderRepository
{
    private readonly OrderApiContext _context = context;
    
    public async Task<IEnumerable<Order>> GetAllAsync()
    {
        var orders = await _context.Orders.ToListAsync();
        return orders.Select(Mapper.ToModel);
    }

    public async Task<Order?> GetByIdAsync(Guid id)
    {
        var orderEntity = await _context.Orders.FindAsync(id);
        return orderEntity == null ? null : Mapper.ToModel(orderEntity);
    }

    public async Task CreateAsync(Order order)
    {
        var orderEntity = Mapper.ToEntity(order);
        
        await _context.Orders.AddAsync(orderEntity);
        await _context.SaveChangesAsync();
    }
}