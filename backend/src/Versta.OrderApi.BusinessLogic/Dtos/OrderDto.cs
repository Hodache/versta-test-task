namespace Versta.OrderApi.BusinessLogic.Dtos;

public class OrderDto
{
    public Guid Id { get; init; }
    public string CityFrom { get; init; } = "";
    public string AddressFrom { get; init; } = "";
    public string CityTo { get; init; } = "";
    public string AddressTo { get; init; } = "";
    public float Weight { get; init; }
    public DateTime PickupDate { get; init; }
}