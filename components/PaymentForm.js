import { useState } from 'react'
import styles from '../styles/PaymentForm.module.css'

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    country: '',
    institution: '',
    studentId: '',
    amount: '',
    currency: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'country' && {
        currency: value === 'uk' ? 'GBP' : value === 'us' ? 'USD' : value === 'canada' ? 'CAD' : ''
      })
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Payment request submitted!\n\nDetails:\nCountry: ${formData.country.toUpperCase()}\nInstitution: ${formData.institution}\nStudent ID: ${formData.studentId}\nAmount: ${formData.amount} ${formData.currency}\n\nYou will be redirected to the secure payment gateway.`)
  }

  return (
    <section id="payment" className={styles.paymentSection}>
      <div className="container">
        <h2>Pay School Fees</h2>
        <div className={styles.paymentForm}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="country">Study Country</label>
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select Country</option>
                <option value="uk">United Kingdom</option>
                <option value="us">United States</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="institution">Institution Name</label>
              <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="studentId">Student ID</label>
              <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="number" name="amount" step="0.01" value={formData.amount} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="currency">Currency</label>
              <select name="currency" value={formData.currency} onChange={handleChange} required>
                <option value="">Select Currency</option>
                <option value="GBP">GBP (£)</option>
                <option value="USD">USD ($)</option>
                <option value="CAD">CAD ($)</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-success" style={{width: '100%'}}>Proceed to Payment</button>
          </form>
        </div>
      </div>
    </section>
  )
}