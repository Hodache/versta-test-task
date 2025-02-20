using Versta.OrderApi.DataAccess.Data.Entities;
using Versta.OrderApi.DataAccess.Models;

namespace Versta.OrderApi.DataAccess.Data;

public static class Mapper
{
    public static Order ToModel(OrderEntity entity)
    {
        return new Order
        {
            Id = entity.Id,
            CityFrom = entity.CityFrom,
            CityTo = entity.CityTo,
            AddressFrom = entity.AddressFrom,
            AddressTo = entity.AddressTo,
            Weight = entity.Weight,
            PickupDate = entity.PickupDate
        };
    }

    public static OrderEntity ToEntity(Order order)
    {
        return new OrderEntity
        {
            Id = order.Id,
            CityFrom = order.CityFrom,
            CityTo = order.CityTo,
            AddressFrom = order.AddressFrom,
            AddressTo = order.AddressTo,
            Weight = order.Weight,
            PickupDate = order.PickupDate
        };
    }
}