using Microsoft.AspNetCore.Mvc;
using Versta.OrderApi.BusinessLogic.Contracts;
using Versta.OrderApi.BusinessLogic.Dtos;
using Versta.OrderApi.BusinessLogic.Services;

namespace Versta.OrderApi.Presentation.Controllers;

[ApiController]
[Route("api/orders/")]
public class OrderController(IOrderService orderService) : ControllerBase
{
    private readonly IOrderService _orderService = orderService;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<OrderDto>>> GetOrders()
    {
        var orders = await _orderService.GetOrders();
        return Ok(orders);
    }

    [HttpGet("{id:Guid}")]
    public async Task<ActionResult<OrderDto>> GetOrder(Guid id)
    {
        var order = await _orderService.GetOrderById(id);
        return Ok(order);
    }

    [HttpPost]
    public async Task<ActionResult> CreateOrder(CreateOrderDto orderDto)
    {
        await _orderService.CreateOrder(orderDto);
        return Ok();
    }
}