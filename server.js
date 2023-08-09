const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const dbConnect = require('./src/config/dbConnect');
const bookRoutes = require('./src/routes/book.routes');
const reservationRoutes = require('./src/routes/reservation.routes');
const userRoutes = require('./src/routes/user.routes');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 8000;

		this.connectDB();
		this.middlewares();
		this.routes();
	}

	connectDB() {
		dbConnect();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(morgan('dev'));
	}

	routes() {
		bookRoutes(this.app);
		reservationRoutes(this.app);
		userRoutes(this.app);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(
				`Server corriendo en el puerto:http://localhost:${this.port}`,
			);
		});
	}
}

module.exports = Server;
