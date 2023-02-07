import React from "react";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button, Checkbox, Form, Input, Typography } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const contact = () => {
  const { TextArea } = Input;
  const { Title } = Typography;
  return (
    <div
      name="contact"
      className="w-full h-100vh p-5 flex flex-col items-center"
    >
   
      <div className="flex justify-between w-1/2 gap-2 mb-[-20px] z-10">
        <div className="flex flex-col bg-white items-center rounded-md p-4 w-48 gap-2">
          <GoLocation size={28} className="text-blue-400"/>
          <h1 className="font-bold text-md font-mono">Location</h1>
          <h1 className="text-gray-500 text-sm">southern part of ethiopia</h1>
        </div>

        <div className="flex flex-col bg-white items-center rounded-md p-4 w-48 gap-2">
          <BsFillTelephoneFill size={28} className="text-blue-400"/>
          <h1 className="font-bold text-md font-mono">Phone Number</h1>
          <h1 className="text-gray-500 text-sm">+125 9......</h1>
        </div>

        <div className="flex flex-col bg-white items-center rounded-md p-4 w-48 gap-2">
          <FaFax size={28} className="text-blue-400"/>
          <h1 className="font-bold text-md font-mono">Fax</h1>
          <h1 className="text-gray-500 text-sm">1-23-4323 50</h1>
        </div>

        <div className="flex flex-col bg-white items-center rounded-md p-4 w-48 gap-2">
          <MdEmail size={28} className="text-blue-400"/>
          <h1 className="font-bold text-md font-mono">Email</h1>
          <h1 className="text-gray-500 text-sm">xyz@gmial.com</h1>
        </div>
      </div>
      <div className="bg-gray-200 w-1/3 pr-16 pt-10 flex justify-start items-start rounded-xl">
        <Form
          className="w-full"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title className="font-mono">Contact Us</Title>
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="TextArea">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default contact;
