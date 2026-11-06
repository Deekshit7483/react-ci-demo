import { test, expect } from '@playwright/test'

const API = '**/jsonplaceholder.typicode.com/users'

const fakeUsers = [
  { id: 1, name: '  Test User  ', email: 'test@example.com' },
  { id: 2, name: 'Second User', email: 'second@example.com' },
]

test('shows the users returned by the API', async ({ page }) => {
  // Answer the API call with our own data instead of the real server
  await page.route(API, (route) => route.fulfill({ json: fakeUsers }))

  await page.goto('./')

  await expect(page.getByRole('heading', { name: 'User list' })).toBeVisible()
  await expect(page.getByRole('listitem')).toHaveCount(3)
  // formatName() should have trimmed the spaces
  await expect(page.getByText('Test User', { exact: true })).toBeVisible()
})

test('shows an error message when the API fails', async ({ page }) => {
  // Make the request fail, like a network error
  await page.route(API, (route) => route.abort())

  await page.goto('./')

  await expect(page.getByText('Could not load users.')).toBeVisible()
  await expect(page.getByRole('listitem')).toHaveCount(0)
})
