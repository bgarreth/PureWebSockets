/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    message
    createdAt
  }
}
`;
export const updateMessage = `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    message
    createdAt
  }
}
`;
export const deleteMessage = `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    message
    createdAt
  }
}
`;
