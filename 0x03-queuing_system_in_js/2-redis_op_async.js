import { createClient } from 'redis'
import redis from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis client not connected to the server: ', err));

await client.connect();

console.log('Redis client connected to the server');

async function setNewSchool(schoolName, value) {
  await client.set(schoolName, value);
}

async function displaySchoolValue(schoolName) {
  const value = await client.get(schoolName);
  console.log(value);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
import { createClient } from 'redis'
import redis from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis client not connected to the server: ', err));

await client.connect();

console.log('Redis client connected to the server');

function setNewSchool(schoolName, value) {
  client.set(schoolName, value);
}

function displaySchoolValue(schoolName) {
  value = await client.get(schoolName);
  console.log(value);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
import { createClient } from 'redis'
import redis from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis client not connected to the server: ', err));

await client.connect();

console.log('Redis client connected to the server');

function setNewSchool(schoolName, value) {
  client.set(schoolName, value);
}

function displaySchoolValue(schoolName) {
  value = await client.get(schoolName);
  console.log(value);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
