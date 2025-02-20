using System.Globalization;
using System.Runtime.InteropServices.JavaScript;
using Versta.OrderApi.DataAccess.Models;

namespace Versta.OrderApi.BusinessLogic.Dtos;

public static class Mapper
{
    public static OrderDto ToOrderDto(Order order)
    {
        return new OrderDto
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

    public static Order ToOrder(OrderDto dto)
    {
        return new Order
        {
            Id = dto.Id,
            CityFrom = dto.CityFrom,
            CityTo = dto.CityTo,
            AddressFrom = dto.AddressFrom,
            AddressTo = dto.AddressTo,
            Weight = dto.Weight,
            PickupDate = dto.PickupDate
        };
    }

    public static Order ToOrder(CreateOrderDto dto)
    {
        return new Order
        {
            CityFrom = dto.CityFrom,
            CityTo = dto.CityTo,
            AddressFrom = dto.AddressFrom,
            AddressTo = dto.AddressTo,
            Weight = dto.Weight,
            PickupDate = DateTime.ParseExact(dto.PickupDate, [ "dd.MM.yyyy", "yyyy-MM-dd", "MM/dd/yyyy" ], CultureInfo.InvariantCulture)
        };
    }
}