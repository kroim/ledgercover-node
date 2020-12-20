(function ($) {
  'use strict';
  $(function () {
    if ($('#order-listing').length) {
      $('#order-listing').DataTable({
        "ajax": "../assets/data/Product_table.json",
        "columns": [{
            "data": "Id"
          },
          {
            "data": "Product_Name"
          },
          {
            "data": "First_Name"
          },
          {
            "data": "Amount"
          },
          {
            "data": "Qty"
          },
          {
            "data": "Purchased_on"
          },
          {
            "data": "Status"
          },
          {
            "data": "Tacking_no"
          }

        ],
        columnDefs: [{
          targets: [-2],
          render: function (a, b, data, d) {
            if (data.Status == "New") {
              return "<div class='badge badge-primary badge-lg'>New</div>";
            } else if (data.Status == "Paid") {
              return "<div class='badge badge-success badge-lg'>Paid</div>";
            } else if (data.Status == "Hold") {
              return "<div class='badge badge-danger badge-lg'>Hold</div>";
            } else if (data.Status == "Review") {
              return "<div class='badge badge-warning badge-lg'>Review</div>";
            }
            return "";
          }
        }],
      });
      $('#order-listing').each(function () {
        var datatable = $(this);
        datatable.closest('.col-sm-12').addClass("height-limiter");
        $(".dataTables_paginate").closest('.row').addClass("table-footer");
      });
    }
  });
})(jQuery);