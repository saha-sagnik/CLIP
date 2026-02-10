// Jetpack Compose BounceTextAnimation Component
export const composeBounceTextAnimationCode = `@Composable
fun BounceTextAnimation(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeBounceTextAnimationProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
