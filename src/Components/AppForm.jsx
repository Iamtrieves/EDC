import AppCreateEventButton from "./AppCreateEventButton";
import AppClearEventData from "./AppClearEventData.jsx";

import AppInput from "./AppInput";
import AppCustomImageInput from "./AppCustomImageInput";
import { useState } from "react";

const AppForm = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          billingAddress: "",
          shippingAddress: "",
          orderNo: "",
          event: "",
          eventVenue: "",
          eventLocation: "",
          eventYear: "",
          ticketType: "",
          ticket: "",
          eventStartingDate: "",
          eventEndingDate: "",
          purchaseDate: "",
          price: "",
          currency: "",
          quantity: "",
          time: "",
          deliveryInfo: "",
          itemId: "",
        };
  });
  const handleChange = (event) => {
    const updatedValue = event.target.value;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [event.target.name]: updatedValue,
      };
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
      return updatedFormData;
    });
  };
  const clearFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      billingAddress: "",
      shippingAddress: "",
      orderNo: "",
      event: "",
      eventVenue: "",
      eventLocation: "",
      eventYear: "",
      ticketType: "",
      ticket: "",
      eventStartingDate: "",
      eventEndingDate: "",
      purchaseDate: "",
      price: "",
      currency: "",
      quantity: "",
      time: "",
      deliveryInfo: "",
      itemId: "",
    });

    localStorage.removeItem("formData"); // Clear the localStorage as well
  };

  return (
    <section className="p-4 overflow-auto bg-gray-200 h-[100vh]">
      <header className="mb-2 text-xl font-semibold">Register Event</header>

      <main>
        <form className="flex flex-col gap-2">
          <AppInput
            id="firstName"
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
            type="text"
            label="First Name"
            value={formData.firstName}
          />

          <AppInput
            id="lastName"
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            type="text"
            label="Last Name"
            value={formData.lastName}
          />

          <AppInput
            id="email"
            name="email"
            placeholder="Email Address"
            type="email"
            label="Email Address"
            onChange={handleChange}
            value={formData.email}
          />

          <AppInput
            id="billingAddress"
            name="billingAddress"
            placeholder="9643 Lucas St Rosemead, CA 91770"
            type="text"
            label="Billing Address"
            onChange={handleChange}
            value={formData.billingAddress}
          />

          <AppInput
            id="shippingAddress"
            name="shippingAddress"
            placeholder="9643 Lucas St Rosemead, CA 91770"
            type="text"
            label="Shipping Address"
            onChange={handleChange}
            value={formData.shippingAddress}
          />

          <AppInput
            id="orderNo"
            name="orderNo"
            placeholder="#143620928"
            type="text"
            label="Order Number"
            onChange={handleChange}
            value={formData.orderNo}
          />

          <AppInput
            id="event"
            name="event"
            placeholder="EDC Las Vegas"
            type="text"
            label="Event"
            onChange={handleChange}
            value={formData.event}
          />

          <AppCustomImageInput label="Event Image" />

          <AppInput
            id="eventVenue"
            name="eventVenue"
            placeholder="Las Vegas Motor Speedway"
            type="text"
            label="Event Venue"
            onChange={handleChange}
            value={formData.eventVenue}
          />

          <AppInput
            id="eventLocation"
            name="eventLocation"
            placeholder="7000 North Las Vegas Boulevard, Las Vegas"
            type="text"
            label="Event Location"
            onChange={handleChange}
            value={formData.eventLocation}
          />
          <AppInput
            id="eventYear"
            name="eventYear"
            placeholder="2025"
            type="text"
            label="Event Year"
            onChange={handleChange}
            value={formData.eventYear}
          />
          <AppInput
            id="ticketType"
            name="ticketType"
            placeholder="3-Day VIP Elevated Experience Pass"
            type="text"
            label="Ticket Type"
            onChange={handleChange}
            value={formData.ticketType}
          />
          <AppInput
            id="ticket"
            name="ticket"
            placeholder="3-Day VIP (Future Owl)"
            type="text"
            label="Ticket"
            onChange={handleChange}
            value={formData.ticket}
          />

          <AppInput
            id="eventStartingDate"
            name="eventStartingDate"
            placeholder="Friday, May 16, 2025"
            type="text"
            label="Event Starting Date"
            onChange={handleChange}
            value={formData.eventStartingDate}
          />
          <AppInput
            id="eventEndingDate"
            name="eventEndingDate"
            placeholder="Sunday, May 18, 2025"
            type="text"
            label="Event Ending Date"
            onChange={handleChange}
            value={formData.eventEndingDate}
          />
          <AppInput
            id="purchaseDate"
            name="purchaseDate"
            placeholder="Fri &#8226; Dec 15th 2023 &#8226; 11:09 AM"
            type="text"
            label="Purchase Date"
            onChange={handleChange}
            value={formData.purchaseDate}
          />
          <AppInput
            id="price"
            placeholder="2690"
            type="text"
            name="price"
            onChange={handleChange}
            value={formData.price}
            label="Price"
          />
          <AppInput
            id="currency"
            name="currency"
            placeholder="$"
            type="text"
            label="Currency"
            onChange={handleChange}
            value={formData.currency}
          />
          <AppInput
            id="quantity"
            name="quantity"
            placeholder="2"
            type="text"
            label="Quantity"
            onChange={handleChange}
            value={formData.quantity}
          />

          <AppInput id="time" placeholder="5:00PM" type="text" label="Time" />
          <AppInput
            id="deliveryInfo"
            name="deliveryInfo"
            placeholder="EDCLV UPS 3-Day 17.10"
            type="text"
            label="Delivery Info"
            onChange={handleChange}
            value={formData.deliveryInfo}
          />
          <AppInput
            id="itemId"
            name="itemId"
            placeholder="4519830"
            type="text"
            label="Item ID"
            onChange={handleChange}
            value={formData.itemId}
          />

          <AppCreateEventButton />
          <AppClearEventData clearFormData={clearFormData} />
        </form>
      </main>
    </section>
  );
};
export default AppForm;
