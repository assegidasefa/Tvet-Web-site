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
      className="w-full  overflow-x-hidden  h-100vh p-5 flex flex-col justify-center items-center "
    >
      <div className="flex md:flex-row md:justify-between flex-col items-center w-full md:w-[550px] gap-2 mb-5 md:mb-[-20px] z-10">
        <div className="flex flex-col bg-white items-center rounded-md py-4 h-32 w-48 gap-2">
          <GoLocation size={28} className="text-blue-400" />
          <h1 className="font-bold text-md font-mono">Location</h1>
          <h1 className="text-gray-500 text-sm">southern part of ethiopia</h1>
        </div>

        <div className="flex flex-col bg-white items-center rounded-md py-4 w-48 h-32 gap-2">
          <BsFillTelephoneFill size={28} className="text-blue-400" />
          <h1 className="font-bold text-md font-mono">Phone Number</h1>
          <h1 className="text-gray-500 text-xs">+125 931401760</h1>
        </div>

        <div className="flex flex-col bg-white items-center rounded-md py-4 h-32 w-48 gap-2">
          <FaFax size={28} className="text-blue-400" />
          <h1 className="font-bold text-md font-mono">Fax</h1>
          <h1 className="text-gray-500 text-sm">1-23-4323 50</h1>
        </div>

        <div className="flex flex-col bg-white items-center rounded-md py-4 w-48 h-32 gap-2">
          <MdEmail size={28} className="text-blue-400" />
          <h1 className="font-bold text-md font-mono">Email</h1>
          <h1 className="text-gray-500 text-sm">nigusedubale@gmail.com</h1>
        </div>
      </div>
      <div className="bg-gray-200 w-full md:w-[400px]  md:pr-16 px-4 md:pt-10 flex flex-col md:flex-row md:justify-start md:items-start rounded-xl">
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
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#0a192f] text-white"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default contact;
