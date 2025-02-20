using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Versta.OrderApi.DataAccess.Data.Entities;

public class OrderEntity
{
    public Guid Id { get; set; }
    
    [Column(TypeName = "VARCHAR(25)")]
    public string CityFrom { get; set; } = null!;
    
    [Column(TypeName = "VARCHAR(100)")]
    public string AddressFrom { get; set; } = null!;
    
    [Column(TypeName = "VARCHAR(25)")]
    public string CityTo { get; set; } = null!;
    
    [Column(TypeName = "VARCHAR(100)")]
    public string AddressTo { get; set; } = null!;
    public float Weight { get; set; }
    
    [DataType(DataType.Date)]
    [Column(TypeName="Date")]
    public DateTime PickupDate { get; set; }
}