using Versta.OrderApi.BusinessLogic.Exceptions;

namespace Versta.OrderApi.Presentation.Middlewares;

public class ExceptionHandlingMiddleware(RequestDelegate next)
{
    private readonly RequestDelegate _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception e)
        {
            await HandleExceptionAsync(context, e);
        }
    }

    private static async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = exception switch
        {
            ValidationFailureException => 400,
            ExistenceException => 404,
            _ => 500
        };

        var response = new
        {
            // ErrorMessage = context.Response.StatusCode == 500 ? "An unexpected error occurred." : exception.Message,
            ErrorMessage = exception.Message,
        };

        await context.Response.WriteAsJsonAsync(response);
    }
}