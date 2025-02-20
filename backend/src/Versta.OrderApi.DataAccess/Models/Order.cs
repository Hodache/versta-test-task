namespace Versta.OrderApi.DataAccess.Models;

public class Order
{
    public Guid Id { get; set; }
    public string CityFrom { get; set; } = "";
    public string AddressFrom { get; set; } = "";
    public string CityTo { get; set; } = "";
    public string AddressTo { get; set; } = "";
    public float Weight { get; set; }
    public DateTime PickupDate { get; set; }
}