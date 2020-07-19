module EventsHelper
  def format_price(price)
    if price == 0
      content_tag(:strong, "Free")
    else
      number_to_currency(price)
    end
  end
end
