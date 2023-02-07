import { useState, useEffect, Component } from "react"
import { getModels } from "./Models"
const models = getModels()

class Lambda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            chatLog: [
                {
                    user: "lambda",
                    message: "How can I help you today?",
                },
            ],
            currentModel: "text-davinci-003",
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" })
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let chatLogNew = [
            ...this.state.chatLog,
            { user: "me", message: this.state.input },
            { user: "lambda", message: "Typing..." },
        ]
        // let msginput = this.state.input
        this.setState({ chatLog: chatLogNew })
        this.setState({ input: "" })
        this.scrollToBottom()

        const messages = chatLogNew
            .slice(0, -1)
            .map((message) => message.message)
            .join("\n")

        try {
            const response = await fetch(
                "https://maverick.sidshr.xyz/getOpenaiResponse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: messages,
                        model: this.state.currentModel,
                    }),
                }
            )

            const data = await response.json()
            chatLogNew.pop()
            this.setState({
                chatLog: [
                    ...chatLogNew,
                    { user: "lambda", message: data.message },
                ],
            })
            this.scrollToBottom()
        } catch (e) {
            chatLogNew.pop()
            this.setState({
                chatLog: [
                    ...chatLogNew,
                    {
                        user: "lambda",
                        message:
                            "Hey, I am currently not available, please try again later.",
                    },
                ],
            })
            this.scrollToBottom()
        }
    }

    render() {
        return (
            <div className="flex h-screen antialiased text-white">
                <div className="flex flex-row h-full w-full overflow-x-hidden">
                    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-gray-800 flex-shrink-0">
                        <div className="flex flex-row items-center justify-center h-12 w-full">
                            <div className="ml-2 font-bold text-2xl">
                                Lambda
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg text-gray-900">
                            <div className="h-20 w-20 rounded-full border overflow-hidden">
                                <img
                                    height="70"
                                    width="70"
                                    align="center"
                                    alt=""
                                    src={`${process.env.PUBLIC_URL}/assets/lambda.png`}
                                ></img>
                            </div>
                            <div className="text-sm font-semibold mt-2">
                                Lambda
                            </div>
                            <div className="text-xs text-gray-500">
                                ChatGPT powered AI.
                            </div>
                            <div className="flex flex-row items-center mt-3">
                                <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                                    <div className="h-3 w-3 bg-white rounded-full self-end mr-1" />
                                </div>
                                <div className="leading-none ml-1 text-xs">
                                    Active
                                </div>
                            </div>
                        </div>
                        <div className="models py-8">
                            <label
                                htmlFor="models"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                <b>Select a model.</b>
                            </label>
                            <select
                                onChange={(e) =>
                                    this.setState({
                                        currentModel: e.target.value,
                                    })
                                }
                                id="models"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option
                                    key="text-davinci-003"
                                    value="text-davinci-003"
                                    selected
                                >
                                    text-davinci-003
                                </option>
                                {models.map((model, index) => (
                                    <option key={model} value={model}>
                                        {model}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <a href="/" className="pb-8">
                            <button
                                type="button"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <i class="fa-solid fa-house px-6"></i>
                                Home Page
                            </button>
                        </a>
                        <div
                            className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-opacity-40	bg-red-800 text-red-400"
                            role="alert"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 inline w-5 h-5 mr-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>
                                <span className="font-medium">Alert!</span> This
                                service is currently only available for a few
                                PCs
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-auto h-full p-6 bg-gray-600">
                        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-800 h-full p-4 bg-gray-800">
                            <div
                                className="flex flex-col h-full overflow-x-auto mb-4"
                                id="block"
                            >
                                <div className="flex flex-col h-full text-gray-900">
                                    <div className="grid grid-cols-12 gap-y-2">
                                        {this.state.chatLog.map(
                                            (message, index) => (
                                                <ChatMessage
                                                    key={index}
                                                    message={message}
                                                />
                                            )
                                        )}
                                        <div
                                            style={{
                                                float: "left",
                                                clear: "both",
                                            }}
                                            ref={(el) => {
                                                this.messagesEnd = el
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="flex flex-row items-center h-16 rounded-xl bg-gray-800 w-full px-4">
                                    <div className="flex-grow ml-4">
                                        <div className="relative w-full">
                                            <input
                                                type="text"
                                                onChange={(e) =>
                                                    this.setState({
                                                        input: e.target.value,
                                                    })
                                                }
                                                value={this.state.input}
                                                className="flex w-full border text-gray-900 rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <button
                                            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                            type="submit"
                                        >
                                            <span>Send</span>
                                            <span className="ml-2">
                                                <svg
                                                    className="w-4 h-4 transform rotate-45 -mt-px"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ChatMessage = ({ message }) => {
    return (
        <div
            className={
                message.user === "me"
                    ? "col-start-6 col-end-13 p-3 rounded-lg"
                    : "col-start-1 col-end-8 p-3 rounded-lg"
            }
        >
            <div
                className={
                    message.user === "me"
                        ? "flex items-center justify-start flex-row-reverse"
                        : "flex flex-row items-center "
                }
            >
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-900 flex-shrink-0">
                    <img
                        height="36"
                        width="36"
                        align="center"
                        alt=""
                        src={`${process.env.PUBLIC_URL}/assets/${
                            message.user === "me" ? "user-icon" : "lambda"
                        }.png`}
                    ></img>
                </div>
                <div
                    className={
                        message.user === "me"
                            ? "relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                            : "relative ml-3 text-sm bg-gray-200 py-2 px-4 shadow rounded-xl"
                    }
                >
                    {message.message}
                </div>
            </div>
        </div>
    )
}

export default Lambda
