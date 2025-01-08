using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications;

public class ProductFilterSortPaginationSpecification : BaseSpecification<Product>
{
    public ProductFilterSortPaginationSpecification(string? brand, string? type) : base(x => 
        (string.IsNullOrWhiteSpace(brand) || x.Brand == brand) &&
        (string.IsNullOrWhiteSpace(type) || x.Type == type))
    {
        
    }
}
