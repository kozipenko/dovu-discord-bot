import fetch from "node-fetch";

export default {
  name: "tvl",
  description: "Show Total Value Locked Stats",
  options: [
    {
      name: "currency",
      description: "Select display currency",
      required: false,
      type: 3
    }
  ],
  reply: async (message) => {
    let currency = message?.data?.options?.find?.(o => o.name === "currency").value.toLowerCase() || "usd";
    const data = await fetch("https://api.dovu.market/api/v1/staking-info").then(res => res.json());
    const currencies = Object.keys(data["total_value_locked"]);

    if (!currencies.includes(currency))
      currency = "usd";

    const embed = {
      color: 0x0052CC,
      fields: [
        { name: "Price", value: `${data.current_price[currency].toFixed(number.toString().split('-')[1])} ${currency.toUpperCase()}` },
        { name: "Total Value Locked", value: `$${data.total_value_locked[currency].toLocaleString()} ${currency.toUpperCase()}` },
        { name: "Total Amount Staked", value: `${data.total_staking_size.toLocaleString()} DOV` }
      ]
    }

    return { type: 4, data: { embeds: [embed] } };
  }
};