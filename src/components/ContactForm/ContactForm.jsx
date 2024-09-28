import React, { useState, useEffect } from "react";
import { FaSpinner } from 'react-icons/fa'; // Import react-icons spinner
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import "./ContactForm.css";

const ContactForm = () => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		service: 'game', // Default to game
		message: ''
	});

	const [isSending, setIsSending] = useState(false);
	const [feedback, setFeedback] = useState("");
	const [sendStatus, setSendStatus] = useState(null);  // Success or failure state

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSending(true);
		setSendStatus(null);

		// Real email sending using emailjs
		emailjs.send(
			'service_kkhw9ui', // Replace with your EmailJS service ID
			'template_gq9zoe9', // Replace with your EmailJS template ID
			{
				from_name: formData.name,
				from_email: formData.email,
				service_type: formData.service, // Capture the selected service type
				message: formData.message
			},
			'Mx19ujhyRS-X4vh6R' // Replace with your EmailJS public key
		)
			.then((result) => {
				setFeedback(t('contact_form.feedback.success'));
				setSendStatus("success");
				setFormData({ name: '', email: '', service: 'game', message: '' });
			}, (error) => {
				setFeedback(t('contact_form.feedback.failure'));
				setSendStatus("failure");
			})
			.finally(() => {
				setIsSending(false);
			});
	};

	// Clear feedback after 10 seconds
	useEffect(() => {
		if (feedback) {
			const timeout = setTimeout(() => setFeedback(""), 10000);
			return () => clearTimeout(timeout);
		}
	}, [feedback]);

	return (
		<div className="contact-form-container boxed">
			<h2>{t('contact_form.title')}</h2>
			<form onSubmit={sendEmail} className="split-form">
				<div className="left-section">
					<div className="form-group">
						<label htmlFor="name">{t('contact_form.labels.name')}</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							placeholder={t('contact_form.placeholders.name')}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">{t('contact_form.labels.email')}</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							placeholder={t('contact_form.placeholders.email')}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="service">{t('contact_form.labels.service')}</label>
						<select
							id="service"
							name="service"
							value={formData.service}
							onChange={handleChange}
							required
						>
							<option value="game">{t('contact_form.options.game')}</option>
							<option value="website">{t('contact_form.options.website')}</option>
							<option value="pc_building">{t('contact_form.options.pc_building')}</option>
						</select>
					</div>
				</div>

				<div className="right-section">
					<div className="form-group">
						<label htmlFor="message">{t('contact_form.labels.message')}</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							placeholder={t('contact_form.placeholders.message')}
						/>
					</div>
					<div className="form-submit-container">
						<button type="submit" disabled={isSending}>
							{isSending && <FaSpinner className="loading-spinner" />}
							{isSending ? t('contact_form.button.sending') : t('contact_form.button.send_message')}
						</button>
					</div>
				</div>
			</form>
			{feedback && <p className={`feedback-message ${sendStatus}`}>{feedback}</p>}
		</div>
	);
};

export default ContactForm;
