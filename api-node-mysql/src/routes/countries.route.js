import { Router } from 'express'
import { createCountry, deleteCountry, getCountries, getCountry, updateCountry } from '../controllers/country.controller.js';

const router = Router()

router.get('/', getCountries)

router.get("/:id", getCountry);

router.post("/", createCountry);

router.put("/:id", updateCountry);

router.delete("/:id", deleteCountry);

export default router