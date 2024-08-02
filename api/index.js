import express, { json } from "express";
import cors from "cors";
import path from "path";

const port = 80;

const app = express();
app.use(json());
app.use(cors());

app.use(express.static("public"));

app.post("/bfhl", (req, res) => {
	const numbers = [];
	const alphabets = [];
	let highestAlphabet = null;

	req.body.data.forEach(item => {
		if (/^\d+$/.test(item)) {
			numbers.push(item);
		} else if (/^[A-Za-z]$/.test(item)) {
			alphabets.push(item);
			if (!highestAlphabet || item.toUpperCase() > highestAlphabet.toUpperCase()) {
				highestAlphabet = item;
			}
		}
	});

	res.header("Content-Type", "application/json");
	res.send({
		is_success: true,
		user_id: "aiushi_sengupta_26122002",
		email: "ap6965@srmist.edu.in",
		roll_number: "RA2111003011273",
		numbers,
		alphabets,
		highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
	});
});

app.get("/bfhl", (req, res) => {
	res.status(200);
	res.send({
		operation_code: 1,
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
