import React from "react";
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import location from '../assets/location.png'

const Footer = () => {
    return(
        <footer className="w-full h-fit flex justify-center bg-gray-100 text-gray-700 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 w-4/6 gap-4 justify-items-end">
                <section className="grid place-content-start">
                    <h2 className="text-xl font-semibold mb-4">About</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="grid place-items-center py-3">
                                        <img src={phone} alt="phone" />
                                    </td>
                                    <td>081 542 2546</td>
                                </tr>
                                <tr>
                                    <td className="grid place-items-center py-3">
                                        <img src={mail} alt="mail" />
                                    </td>
                                    <td className="">
                                        perasport@pdn.ac.lk
                                    </td>
                                </tr>
                                <tr>
                                    <td className="grid place-items-center py-3">
                                        <img src={location} alt="location" />
                                    </td>
                                    <td>
                                        The Gymnasium,<br/>
                                        University of peradeniya,<br/>
                                        Sri lanka.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </section>
            </div>
        </footer>
    )
}

export default Footer