# List of contacts
contacts = [{'username': 'a'}, {'username': 'b'}, {'username': 'c'}]
# List of users
users = [{'id': '123', 'username': 'a'}, {'id': '234', 'username': 'b'}]
# End result is a list of `contacts` with `id` added from `users` that match on `username`
# result = [{'id': '123', 'username': 'a'}, {'id': '234', 'username': 'b'}, {'username': 'c'}]


result = [a for s in [[j for j in users if i['username'] == j['username']] or [i] for i in contacts] for a in s]


def something(x,y):

  result = []

  for i in x:
    for j in y:
      if i['username'] == j['username']:
        result.append(j)
    if i['username'] != result[len(result)-1]['username']:
      result.append(i)

  return result

# print(something(contacts ,users))

print(result)

