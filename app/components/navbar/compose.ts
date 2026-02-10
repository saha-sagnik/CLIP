// Jetpack Compose Navbar Component
export const composeNavbarCode = `@Composable
fun Navbar(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeNavbarProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
