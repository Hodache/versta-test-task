FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY ["src/Versta.OrderApi.Presentation/Versta.OrderApi.Presentation.csproj", "src/Versta.OrderApi.Presentation/"]
COPY ["src/Versta.OrderApi.BusinessLogic/Versta.OrderApi.BusinessLogic.csproj", "src/Versta.OrderApi.BusinessLogic/"]
COPY ["src/Versta.OrderApi.DataAccess/Versta.OrderApi.DataAccess.csproj", "src/Versta.OrderApi.DataAccess/"]

RUN dotnet restore "src/Versta.OrderApi.Presentation/Versta.OrderApi.Presentation.csproj"
RUN dotnet restore "src/Versta.OrderApi.BusinessLogic/Versta.OrderApi.BusinessLogic.csproj"
RUN dotnet restore "src/Versta.OrderApi.DataAccess/Versta.OrderApi.DataAccess.csproj"

COPY . .

WORKDIR "/src/src/Versta.OrderApi.Presentation"
RUN dotnet build "Versta.OrderApi.Presentation.csproj" -c Release -o /app/build

WORKDIR "/src/src/Versta.OrderApi.BusinessLogic"
RUN dotnet build "Versta.OrderApi.BusinessLogic.csproj" -c Release -o /app/build

WORKDIR "/src/src/Versta.OrderApi.DataAccess"
RUN dotnet build "Versta.OrderApi.DataAccess.csproj" -c Release -o /app/build

FROM build AS publish
WORKDIR "/src/src/Versta.OrderApi.Presentation"
RUN dotnet publish "Versta.OrderApi.Presentation.csproj" -c Release -o /app/publish --no-restore

WORKDIR "/src/src/Versta.OrderApi.BusinessLogic"
RUN dotnet publish "Versta.OrderApi.BusinessLogic.csproj" -c Release -o /app/publish --no-restore

WORKDIR "/src/src/Versta.OrderApi.DataAccess"
RUN dotnet publish "Versta.OrderApi.DataAccess.csproj" -c Release -o /app/publish --no-restore

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

EXPOSE 8080

ENTRYPOINT ["dotnet", "Versta.OrderApi.Presentation.dll"]
