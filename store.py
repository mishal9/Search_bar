class TrieNode:
    """A node in the trie structure"""

    def __init__(self, char):
        # the character stored in this node
        self.char = char

        # whether this can be the end of a word
        self.is_end = False

        # a weight indicating how many times a word is inserted
        # (if this node's is_end is True)
        self.weight = 0

        self.list = []

        # a dictionary of child nodes
        # keys are characters, values are nodes
        self.children = {}

class Trie(object):
    """The trie object"""
    def __init__(self):
        """
        The trie has at least the root node.
        The root node does not store any character
        """
        self.root = TrieNode("")
    
    def insert(self, word, whole):
        """Insert a word into the trie"""
        node = self.root
        # 'data/fake_band_names_mit.txt'
        # Loop through each character in the word
        # Check if there is no child containing the character, create a new child for the current node
        for char in word:
            if char in node.children:
                node = node.children[char]
            else:
                # If a character is not found,
                # create a new node in the trie
                new_node = TrieNode(char)
                node.children[char] = new_node
                node = new_node
                
        # Mark the end of a word
        node.is_end = True

        # do not add if start with same prefix; adding probable words
        if word[:4] != whole[:4]:
            node.list.append(whole)

        # Increment the weight to indicate that we see this word once more
        node.weight += 1
        
    def dfs(self, node, prefix):
        """Depth-first traversal of the trie
        
        Args:
            - node: the node to start with
            - prefix: the current prefix, for tracing a
                word while traversing the trie
        """
        if node.is_end:
            self.output.add((prefix + node.char, node.weight))

        '''
        Add probable words based on keyword
        '''
        for word in node.list:
            self.output.add((word, 0))
        
        for child in node.children.values():
            self.dfs(child, prefix + node.char)
        
    def query(self, x):
        """Given an input (a prefix), retrieve all words stored in
        the trie with that prefix, sort the words by the number of 
        times they have been inserted
        """
        # Use a variable within the class to keep all possible outputs
        # As there can be more than one word with such prefix
        self.output = set()
        node = self.root
        
        # Check if the prefix is in the trie
        for char in x:
            if char in node.children:
                node = node.children[char]
            else:
                # cannot found the prefix, return empty list
                return []
        
        # Traverse the trie to get all candidates
        self.dfs(node, x[:-1])

        print(sorted(self.output, key=lambda x: x[1], reverse=True))

        # Sort the results in reverse order and return
        return sorted(self.output, key=lambda x: x[1], reverse=True)



### TEST
'''
# Setting up the Trie
root = Trie()

string = 'Hang Newsletters Both Emporium Damnation Chemise Loudest Acceptability Mammas Kudo Sandman'

tokens = string.split(' ')
for token in tokens:
    root.insert(token, string)
root.insert(string, string)

#root.insert('Hang Newsletters Both Emporium Damnation Chemise Loudest Acceptability Mammas Kudo Sandman')

print(root.query('hang n'.title()))
print(root.query('Emporium'))
'''
