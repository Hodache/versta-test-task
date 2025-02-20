using Microsoft.EntityFrameworkCore;
using Versta.OrderApi.DataAccess.Data.Entities;

namespace Versta.OrderApi.DataAccess.Data;

public class OrderApiContext : DbContext
{
    public DbSet<OrderEntity> Orders { get; set; }

    public OrderApiContext(DbContextOptions<OrderApiContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
}