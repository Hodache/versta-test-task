namespace Versta.OrderApi.BusinessLogic.Exceptions;

public class ValidationFailureException(string message) : Exception(message);