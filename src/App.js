import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="Expense-Tracker-App">
			
			<div className="text-center pb-4">
				<img src={require("./logo.png")} alt="Logo"/>
			</div>

			<div className="balance">
				<h6 className="mb-0">Current Balance</h6>
				<h4>$100</h4>
			</div>

			<div className="expense-container text-center">
				<h6 className="mb-0">INCOME<br /> <span className="income_amount fz-40">$500</span></h6>
				<span className="divider">&nbsp;</span>
				<h6 className="mb-0">EXPENSE<br /> <span className="expense_amount fz-40">$240</span></h6>
			</div>

			<div className="history mt-4">
				<h5>Add New Transaction</h5>
				<hr />
				<ul className="list-group clearfix">
					<li className="list-group-item income-list"><i className="delete">X</i>Cras justo odio <span className="list-amount">+$25</span></li>
					<li className="list-group-item expense-list"><i className="delete">X</i>Dapibus ac facilisis in <span className="list-amount">-$25</span></li>
					<li className="list-group-item income-list"><i className="delete">X</i>Morbi leo risus <span className="list-amount">+$25</span></li>
					<li className="list-group-item expense-list"><i className="delete">X</i>Porta ac consectetur ac <span className="list-amount">-$25</span></li>
					<li className="list-group-item income-list"><i className="delete">X</i>Vestibulum at eros <span className="list-amount">+$25</span></li>
				</ul>
			</div>
			
			<div className="transaction-form mt-4">
				<h5>Add New Transaction</h5>
				<hr />
				<form>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<input type="text" className="form-control" id="description" placeholder="Description" />
					</div>
					<div className="form-group">
						<label htmlFor="amount">Amount</label>
						<input type="text" className="form-control" id="amount" placeholder="Amount" />
					</div>
					<button type="submit" className="btn btn-primary btn-block">Add Transaction</button>
				</form>
			</div>

		</div>
	);
}

export default App;