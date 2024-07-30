import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis client not connected to the server: ', err));

function setNewSchool(schoolName, value) {
  return client.set(schoolName, value)
    .then((reply)
    .catch((err) => console.error('Error setting value:', err));
}

function displaySchoolValue(schoolName) {
  return client.get(schoolName)
    .then((value) => console.log(value))
    .catch((err) => console.error('Error getting value:', err));
}

client.connect()
  .then(() => {
    console.log('Redis client connected to the server');
    return displaySchoolValue('Holberton');
  })
  .then(() => setNewSchool('HolbertonSanFrancisco', '100'))
  .then(() => displaySchoolValue('HolbertonSanFrancisco'))
  .then(() => client.disconnect())
  .catch((err) => {
    console.error('Error in Redis operations:', err);
    // Ensure disconnect in case of an error
    client.disconnect();
  });

