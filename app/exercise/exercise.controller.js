import asyncHandler from 'express-async-handler';

import { prisma } from '../prisma.js';

// @desc    Get exercises
// @route   GET /api/exercises
// @access  Private
export const getExercise = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	});

	res.json(exercises);
});

// @desc    Create new exercise
// @route   POST /api/exercises
// @access  Private
export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body;

	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath,
		},
	});

	res.json(exercise);
});

// @desc    Update exercise
// @route   PUT /api/exercises/:id
// @access  Private
export const updateExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body;

	try {
		const exercise = await prisma.exercise.update({
			where: { id: Number(req.params.id) },
			data: {
				name,
				times,
				iconPath,
			},
		});

		res.json(exercise);
	} catch (error) {
		res.status(404);
		throw new Error('Exercise not found');
	}
});

// @desc    Delete exercise
// @route   DELETE /api/exercises/:id
// @access  Private
export const deleteExercise = asyncHandler(async (req, res) => {
	try {
		await prisma.exercise.delete({
			where: { id: Number(req.params.id) },
		});

		res.json({ message: 'Exercise removed' });
	} catch (error) {
		res.status(404);
		throw new Error('Exercise not found');
	}
});
