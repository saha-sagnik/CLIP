// Jetpack Compose SlidingTypeText Component
export const composeSlidingTypeTextCode = `@Composable
fun SlidingTypeText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeSlidingTypeTextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
