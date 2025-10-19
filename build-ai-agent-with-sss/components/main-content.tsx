"use client"

import CodeEditor from "@/components/code-editor"
import { Card } from "@/components/ui/card"

interface MainContentProps {
  activeSection: string
  onNavigate?: (sectionId: string) => void
}

const contentMap: Record<string, React.ReactNode> = {
  "introduction": (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Building AI Agents: Complete Guide
      </h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg text-foreground/90 leading-relaxed">
          Welcome to the <strong>comprehensive guide</strong> for building intelligent AI agents! This documentation covers
          everything from fundamental concepts to advanced multi-agent systems, framework comparisons, and real-world implementations.
        </p>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h2 className="text-2xl font-semibold mb-4">📚 What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">🧠</span>
              <div>
                <h4 className="font-semibold text-foreground">Foundation Concepts</h4>
                <p className="text-sm text-foreground/70">AI Agents, LLMs, Tools, Memory, ReAct pattern</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-500 text-xl">🔄</span>
              <div>
                <h4 className="font-semibold text-foreground">Core Patterns</h4>
                <p className="text-sm text-foreground/70">ReAct, RAG, Multi-Agent, Reflection, Planning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">🛠️</span>
              <div>
                <h4 className="font-semibold text-foreground">Frameworks</h4>
                <p className="text-sm text-foreground/70">LangChain, LangGraph, CrewAI, AutoGen</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">💻</span>
              <div>
                <h4 className="font-semibold text-foreground">Code Examples</h4>
                <p className="text-sm text-foreground/70">Production-ready implementations for each framework</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-500 text-xl">🎯</span>
              <div>
                <h4 className="font-semibold text-foreground">Framework Selection</h4>
                <p className="text-sm text-foreground/70">Decision matrices and scenario-based recommendations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal-500 text-xl">🚀</span>
              <div>
                <h4 className="font-semibold text-foreground">Future Trends</h4>
                <p className="text-sm text-foreground/70">Evolution from shallow to deep agents, hybrid systems</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">📖 Essential AI Terminology</h2>
        <p className="text-foreground/80 mb-4">
          Before diving in, let's clarify the key terms you'll encounter throughout this guide.
        </p>

        <div className="space-y-3">
          <Card className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">LLM (Large Language Model)</h4>
                <p className="text-sm text-foreground/70">
                  A neural network trained on massive text data that understands and generates human language.
                  Examples: GPT-4, Claude, Llama. The "brain" of an AI agent.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">AI Agent</h4>
                <p className="text-sm text-foreground/70">
                  An autonomous system powered by an LLM that can reason, plan, use tools, and take actions to achieve goals.
                  Goes beyond simple Q&A to actually <em>do things</em>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">AI Assistant</h4>
                <p className="text-sm text-foreground/70">
                  A conversational AI that helps users by answering questions and providing information, but doesn't
                  take autonomous actions. Examples: ChatGPT, Claude in chat mode.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔧</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Bot / Rule-Based System</h4>
                <p className="text-sm text-foreground/70">
                  Pre-programmed software that follows fixed rules and scripts. No learning or adaptation.
                  Example: "If user says X, respond with Y" chatbots.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">RAG (Retrieval-Augmented Generation)</h4>
                <p className="text-sm text-foreground/70">
                  A technique where the AI retrieves relevant information from external documents/databases
                  before generating a response. Grounds answers in real data, reduces hallucinations.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-teal-500/10 to-teal-600/10 border border-teal-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Prompt Engineering</h4>
                <p className="text-sm text-foreground/70">
                  The art and science of crafting effective instructions (prompts) for LLMs to get desired outputs.
                  Includes techniques like few-shot learning, chain-of-thought, and system prompts.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Context Window</h4>
                <p className="text-sm text-foreground/70">
                  The amount of text (measured in tokens) an LLM can "see" at once. Includes the prompt,
                  conversation history, and response. Limited by model architecture (e.g., 128K tokens for GPT-4).
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔌</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">MCP (Model Context Protocol)</h4>
                <p className="text-sm text-foreground/70">
                  An open standard by Anthropic for connecting AI models to external data sources and tools.
                  Enables seamless integration between AI agents and your apps, databases, and APIs.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 border border-indigo-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Tool/Function Calling</h4>
                <p className="text-sm text-foreground/70">
                  The ability for an LLM to invoke external functions or APIs. The model decides <em>which</em>
                  tool to use and <em>what parameters</em> to pass, then processes the result.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">AI Automation</h4>
                <p className="text-sm text-foreground/70">
                  Using AI to automate repetitive tasks and workflows without human intervention.
                  Ranges from simple rule-based automation to complex multi-step agent workflows.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-violet-500/10 to-violet-600/10 border border-violet-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">ReAct (Reasoning and Acting)</h4>
                <p className="text-sm text-foreground/70">
                  A foundational agent pattern where the AI alternates between thinking (reasoning about what to do),
                  acting (using tools), and observing (processing results). The most popular agent architecture.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗄️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Vector Database</h4>
                <p className="text-sm text-foreground/70">
                  A specialized database that stores data as high-dimensional vectors (embeddings).
                  Enables semantic search — finding similar content by meaning, not just keywords.
                  Examples: Pinecone, Chroma, Weaviate.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧩</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Embeddings</h4>
                <p className="text-sm text-foreground/70">
                  Numerical representations of text (or images) as vectors. Captures semantic meaning —
                  similar concepts have similar embeddings. Used for RAG, semantic search, and clustering.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <h3 className="text-xl font-semibold text-foreground mb-3">🚀 Ready to Begin?</h3>
        <p className="text-foreground/80 mb-3">
          Now that you understand the key terminology, let's dive into the fundamentals of AI agents,
          starting with what makes an agent different from a simple chatbot or assistant.
        </p>
        <p className="text-sm text-foreground/70">
          💡 <strong>Tip:</strong> Use the sidebar to navigate between topics. Each section builds on the previous,
          so we recommend following the order for the best learning experience!
        </p>
      </div>
    </div>
  ),
  "intro-agents": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">What are AI Agents?</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        An <strong>Artificial Intelligence (AI) agent</strong> is a software system that leverages a Large Language Model (LLM) to
        autonomously pursue goals and complete tasks on behalf of a user. Unlike simple chatbots or automated scripts,
        AI agents possess <strong>reasoning, planning, and memory</strong> capabilities that enable them to make independent
        decisions and adapt their behavior based on outcomes.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🎯 Core Characteristics of AI Agents</h3>
        <div className="space-y-3 text-foreground/80">
          <div className="flex gap-3">
            <span className="text-primary font-bold">1.</span>
            <div>
              <strong>Autonomy:</strong> Can operate independently without constant human supervision,
              making decisions based on their programming and learned patterns.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-primary font-bold">2.</span>
            <div>
              <strong>Tool Integration:</strong> Ability to use external tools, APIs, and services to extend
              their capabilities beyond the LLM's built-in knowledge.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-primary font-bold">3.</span>
            <div>
              <strong>Memory & State:</strong> Maintain context across interactions, remember past conversations,
              and learn from previous experiences.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-primary font-bold">4.</span>
            <div>
              <strong>Goal-Oriented:</strong> Work towards specific objectives rather than just responding
              to individual queries or commands.
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">Key Differentiators</h3>
        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">🤖 Bots</h4>
            <p className="text-sm text-foreground/70">
              Least autonomous, follow pre-programmed rules, minimal learning capabilities.
              Example: Simple chatbots with scripted responses.
            </p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">🤝 AI Assistants</h4>
            <p className="text-sm text-foreground/70">
              Intermediate level, collaborate with users, reactive rather than proactive.
              Example: ChatGPT, Claude - respond to user queries but don't take independent actions.
            </p>
          </div>
          <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
            <h4 className="font-semibold text-foreground mb-2">🧠 AI Agents</h4>
            <p className="text-sm text-foreground/70">
              Highest autonomy, handle complex workflows, make independent decisions, use tools,
              maintain memory. Example: AutoGPT, research agents, customer service agents.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Real-World Example</h3>
        <p className="text-foreground/80 mb-4">
          Consider a <strong>Research Agent</strong> that needs to write a comprehensive report on AI trends.
          The agent would:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-foreground/80 ml-4">
          <li>Search the web for recent AI news and papers</li>
          <li>Read and analyze multiple sources</li>
          <li>Extract key insights and data points</li>
          <li>Organize information into logical sections</li>
          <li>Write a coherent report with citations</li>
          <li>Review and refine the content</li>
        </ol>
        <p className="text-foreground/80 mt-4">
          All of this happens <strong>autonomously</strong> - the agent decides what to search for,
          which sources to use, and how to structure the final report.
        </p>
      </div>
    </div>
  ),
  "intro-llm": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">The Role of the LLM</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        At the core of every modern AI agent lies a <strong>Large Language Model (LLM)</strong>, such as GPT-4,
        Claude, or Gemini. The LLM serves as the agent's <strong>"brain"</strong> - the central reasoning engine
        that processes information, makes decisions, and generates responses.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🧠 Primary Functions of LLMs in Agents</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">1. Language Understanding</h4>
            <p className="text-sm text-foreground/70">
              Interpret natural language inputs, understand context, intent, and nuanced meanings in user requests.
            </p>
          </div>
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">2. Reasoning & Planning</h4>
            <p className="text-sm text-foreground/70">
              Break down complex tasks into steps, make logical decisions, and plan sequences of actions.
            </p>
          </div>
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">3. Response Generation</h4>
            <p className="text-sm text-foreground/70">
              Create human-like, contextually appropriate responses and outputs in natural language.
            </p>
          </div>
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">4. Tool Selection</h4>
            <p className="text-sm text-foreground/70">
              Decide which tools or APIs to use based on the task requirements and available capabilities.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Popular LLMs for AI Agents (2025)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 hover:border-green-500/50 transition-all hover:shadow-lg group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform p-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAABnZ2fS0tKcnJyVlZUrKyv19fVwcHD7+/shISH4+PhsbGzy8vLJycnu7u7c3NxeXl65ubmysrKoqKjk5OQ8PDw3NzeGhoa/v795eXlKSkpFRUWioqKAgIBPT08QEBAYGBhcOw6UAAALCElEQVR4nMVc62KqMAxWURCUi1xEnRvw/i95vCBJmqQU5jz5t1no1zb3pCwWcyn1kvLnUHftso2a7Sb3qtmvehOF+f5raVC92vxHXHF+MAENtPb+D6Y12yNM3f7zsIJvG6InHZLPYjpbd2mgn+BzkNKLE6Q75Z/C5B2dMd02K/wIpnICpBt9fUA/hBth4s736+v1WvuR8GP992L4wyZtNkUW94irc3nhwP5YCsOTuQ2bypCwMD4fOjooSha7OM2SvCjyJEvj3XtBGZi+zvKwzDjj7tTgv5pTkb0PE+Vx/6xLVrUVuAtv3nGTvUcuE/LeU2odfPbtsJbLVfmGc0xr9Ma2GBserMZQLf3v+LegyImMM0V4akdRLevyd5hy9K7rKKZdPnp8T/r6jcKI8eGNamlPd7UY/WKzkJRHY/tUuVvsx2bN5awYvUTRTgN9S9bGRseZ9hGpzZN1YJiI0662Ze5lmZevt4ea/z7LPqbgrhytnlslMFO0SfBWhNmZWdBoDiqky23SIrh/3UWcjwUdM1CB7TpYRn3zg9lrQhEmVGdEdgPBKfaGZ1t9owTDcrDKadGRLZ3k0BeXBp5utFGSCS5GjJt3xaN/XAHFiXH2ijpITUfrtvK1w/sJD7pp0bBkoZSs5woeS6zcXKY1XoaDuooLfiAXaWByZePcA1GMajs62pMCTmGHU85M3RRPCXupI0uJeYSwlHRcvGaD2tM05w0tqrZ6o5kccNYmS525ZjpMNWQBkiWb6yhw04O+6DCvYSOuM9yjCh4/6pssBZzPXSDDcuZatsWslAaaT12TyE4PIvotZT9vNFNRFWVhMSMxiK9mxUw9GB2GHSFei7mfqk2J13cHy//WuRjYRXEgzblO2QK2Ag/ck2FXNeuTv4Sh0b3DbniPqNYNHt/e5U0GhfWTv9aYiag71WcA12gl7GdGmPf45LtRUD+aGmA2UQGfgYfBBwRE7/z0amkElMpMwTcP/fxclHqIXLm3RxhqMPNWUL6q8M7cJj7WIDmZkNhlzkWCVwYqwwZK9RgzrllfdOHPgAJlSgEzJZImKyiZSQJd2d0f+mYPDL8ZVoNIXiE94Aoq+O7Qq1YF3zTfVN2DAazpNgaIB4ianArqjEG0RbgIBGO6pxI77KxPxQY9SQ92GiiSR4j6RwIhB0MyXAOnd1QOkDqgaKeAoulj5BQLOY8r4pFhR2i8hOJtgw/dQdFzauiizzZPBx4kxggiC99YvTMoqgZYhCW4qctTYILCO1WBs2naVkdQJI/QnSSnYCckiZ45Rvn44PQY77qB2uAMUKvlBjyu5h9nKDM6aLuN+SIHUGHe0ZlaNaLJuf/fZEglYFUxrJOnC8ZBZUIGqNE2K+XudncaXnBEigJSdTV7yxioSrEpW819sFUMsZkBluJxqhXULvzG6ZaGqk7tDPWi4QqNAmnlTqsVVI5dsLs6zLFeiFTHplBy2tgfhg3lXqQNFKZ285DuYI3lUHUBhUzNnfDwIQzouLPjCOoyLCclTHbSnOVMyGm1SB/tBlb44mbfCRStQmT0DLXoKmFZFBxaxsNLDpw3HUBxp5jymhr5rjsKCpvddFC0W76qUVDtSUim7ch8B81tDi7UqUEbDqCEvNgYKE0fUf2lqwdieXxA/4udstWhCGvVucJaAZFDUFSzeaot7WVXYhNXGn7i0wyaCqSPJcbsoHwrpBtRHXlR1AOu6ECSA9IVrnrq+UQ0lks0FHekJKZxjXM4QNDonGvfCeoeXYkHjh3p1ynDqXJr9QZQfofm3IpniET10MOG8suKDX8DqP3igmGJ/QPIv+gd8nD4B88bvwHUbaUZNim14D1k8POrBARWgfku7wFllCaO3DFFiqFnbPBRWT128ESIhZsOapESfbQ1H019EwPSFCYfolfVoP56UGNJagzKqGT45kQggdcn04GhYXkr0lDy8+LRWaBui0eO8N4YG4N32C8eDFBkriAgwUqfLp8J6rYfsEbTejAeQtUIxlXhGXu4x/OvQKGpTWaHVGLU/wdthxCykZjlLjrzQa31eWATeyk4w6SCT2wEa/vQml6cCwrmeEkU2iqxBJqRlqjoL0DBxrykDfsPPFW6uDcgsTaWN4MCxh62BccCsosRmvn6N4NKh1UP6iLDG6FUgCpaKJqk0cdBBYIHTLKDLCXUE+lVaC0Vszv17rArqHA4rAZ0GAnmLkq3VVi4xXQocHAFBeJ3RVENyYbU2nw7kmLSKmYoxHIGNdgVBGpRUUbea61pKTlDORhFHOoMalgHBmW2dncaZ1HvyGfCSsJ2d54ajq/B62RZuaNWZQ0L0/IAVUbO3BUUhHo4/gw6E9TNG3PLXkI8ELPUkyso6NzEbk1mvu5BeooJW56etXZC+6Kz8hx+woZOuS1gqX9i3jmWRrWjO09TnhBUYU9TbUNW1UNIWvFYInYaKOAHPJ1eZFXzAPaU9TRQINFI+KAQeb3wCp3aN2JJ7k8CBca3w4sejmIllVGkGPJJrKv6VcOaBAo4Gnvk3gD1rjTPPAUvxJD9Ijs0CtWwpoDawXyYpbzh1Q8vLxUugm1Fy3PCmBpkDKeAAi+T9DhDONEfFNeDt000Ye2Iy0PzjVNAwUaRpigG6vYv3uJmtADRjrOSQp4ACiXOyA8ACjnpQhsnqptlxBVlOWB3UGkHq6aLJow+DBfO8FX8JYUYocbnDgqFcFTIq0GyaYXN8MwfVN5gFViZfUluvTMoJFMN3W7wPM2eE4G1mgJDbRn/TwLloVeZiwOeZQFBab11IrT6TAGF1Zy5H8ggc8c71Vt9rmrnvRuoCnEmL2LDA5IfnAmstbRZn5dzOgIqwdLCJwYnT2y5DKWLXzIzLbCdtoOiupeHt8Hwo3ZnpzS8B92jQYrEBor2aYtd6TBCi2PIBSLVQO9IQksHFZZUrEVfEvnDynQ3FniJg15MN7oESXYTQGULswtNzquA+rRdOsjvc0bqxUPm9JGEJRzrxXTZtIsR8L6jpQk5LEr15qfQN0IYRe/fUC9roNSZ/dqVQgG9DyPsuRqc6EezQzWUGbdgEx56mIGQdl3f1mCP3Jpm6mUk4YKYbxZ0Y7nPRa3HPwnJKK+z2Ui6J8qDa0+8/6cW43vCCVk16cJpV/DZpE4XKQh3uK6BVawzKqFnMhLzptysq9E3ptRuHyUSTLW/FtOhsTGsdb2ORHZ4/DYSb1lZapViUti408n9uiFxylX71lOYLxmJXecPApVRrzaTdE5AeLYV6w8vyrgybNXmJCxFk7VgavhNueoz8c6syGYJQBzUC4w6mSm9Rszie0JuxireaKPmXNXOmNZZnTNciamSTccQ6e2dDwpAm9dTrcUTFZ/RP2w3RXK/5FxuD6K1GLmNhfwH5zuilCq3D90gmmIrZm3Uwixoj5L9hu+C3NmZYr9M0m76CWS5atUTymDgLrfpJFwsFCkqR6/2kSrE6Ocy7CQkgjhpVThEJP9otklMpli4s27SfnSfSGcDayiZQbty9NMjI96HkeF6z5d6wmxzHPlgxI/OumawbzWl0ygrNitS8TgZMNdaa6IhLLOCJJ12QVp5SVEUzw8RJQaqaOuxxHFVmoLy1x/K4h/cqE+F9zrHsDqvOTNe/vzjXZ4gmG3kH5vV4XoUP5K1+cAHxSr5uqNKb+RxC4VTvizzgW+J9eRuH7VY4i8ocNss/f7035CQ1WC0/vXHpqbDWlk/N3X9hNAJ5Mn3YO50yH/jPf0W18/BVE1ds80/+F1IkcIsKU6H4/3rrP51dSqTbD4n/QMpyo8OveVaogAAAABJRU5ErkJggg=="
                  alt="OpenAI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-1">GPT-5</h4>
                <p className="text-sm text-muted-foreground font-medium">OpenAI</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Exceptional multilingual and multimodal reasoning for coding, writing, analysis, and automation. Unified architecture handles text, code, images, and video in single workflows. Advanced safety system, strong agentic capabilities for complex multi-step tasks, and speed/cost variants available. State-of-the-art for math, science, and tool use.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-lg group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform p-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAJFBMVEVHcEzZd1fZd1fZd1fZd1fad1jZd1fZd1fZd1fZd1fZd1fZd1deZDooAAAADHRSTlMA//F3mhLfyjpWsiMDGU5mAAABH0lEQVQokXVSWXbEIAzDuw33v28FJCnpTP3BA6+yRGvbLK39a0F9RUvHZ5CIazZwkm+VpCi1nZP1GpJEnq2NdabzU594N0XpzInRhq/7jvm8wsOjFfVmcQG4guTWZKYL8HSiA1XFHDjgHMqCpKfpNPgIXiZVVvSJ9yazOJARxBiYf/ZMoIUxrYGjRHs/di2nbdzDZxIb1maPriold3QlyFJCAonMd08A7/WhkN19PWDolSeiXU7URWPm8S3ewMCuvGpB+kigVXvWZKlgIVycF0Hjl6DIoVRCGKz9pE8W0QKXkgkIEmjzUDuh11TSuVkn348DLHs1Y7/kzTi+ksX8GLn0wBRrdvCQS949C43fstj6FhfM8Unfqqwv3gf3+/kDMJgHC0kwnjEAAAAASUVORK5CYII="
                  alt="Anthropic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-1">Claude 4.5 Sonnet</h4>
                <p className="text-sm text-muted-foreground font-medium">Anthropic</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              State-of-the-art for agentic tasks, tool invocation, and autonomous software routines. Unmatched coding support with multi-file edits, checkpointing, and long-horizon planning. Supports up to 200K tokens context (1M select), enables code execution and file creation. Robust for multi-hour, multi-step autonomous workflows.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform p-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACbElEQVR4AWJwL/ChKyZL0y9XpzJAr/UAG0sYhWE4xrVt27Zt27Zt1ba7Rm27vbZt226/9sxmNtN1MZvkTSZ8cs7op8wG/ho58iVlFvDzuKn1f44ciQ8TZoCu+QZpOsGXsRPxasYCXFu4R8gr+MG+WyUWu71wKzLXOGCFxKMSb+DXCRNPcjHldgWc9p88yQv4efnw1ZqY495M7Dp2G5Mtvq8uVfDLnPG99GFLLF9hivUXDLL536tUwM8rR/Z6vWYGbu1cg8x9FirsUEYhbLjVH8ok1OgaXx4epsbkx4RwsEjTwvpZ5LIZXa/ep/GzdYdThF23n4YUp20QeVnDxikW2x2u6MS6W6rqcgLoegInO1ugklHwW0KD+r/E9YTvA1uCui4YiDTlBAaz8BdihV8WFrjdU2OakGadT0BQUH0t8G9SlR1/46u9/BpTH2wPktsymF/MAlgEH8JyhQqc6HUf/Zw+oZftT4OYBvyyoC1q8Hd6tR0/s2q//JTTEBRhF892R9jpUQy4Lnk3A44U5KCf7w30c3lDoHFMJ6ix0ucX2wgIY0GHs/MYcGq0E4ZJoxi0j/tT7pSGICG7UqMPTcb1wSdZcFPOBsxKPIYxoQL0FWQanbKz8YdGd15XZ672uzoDh88t505JqOaULFy814JbwM2ZvTSnJJSm1ERL/OJzUe6UA5UympKLlt6njbtedsr+YR7oLA1XowN9nq3m5fe05OSqkyNTN6Nd9FG0DfZj0O6irJO8/Q/pZ8uCLMrrD5hqHb9b2CBhIwPSNe9nmqapS+oTSNWI2Vufd5CqnLDiJWW2c2nZxCU7KP7BUigf+OW0iDHe5JwAAAAASUVORK5CYII="
                  alt="Google Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-1">Gemini 2.5 Pro</h4>
                <p className="text-sm text-muted-foreground font-medium">Google</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Excels at multimodal analysis across text, images, audio, and code. Advanced coding and debugging, real-time agentic processing, industry-best math/science performance, and low latency for interactive apps. Scales to large datasets and complex workflows in demanding environments.
            </p>
          </Card>
        </div>
      </div>



      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">How LLMs Power Agent Intelligence</h3>
        <div className="space-y-3 text-foreground/80">
          <p>
            When an agent receives a task like <em>"Research the latest AI trends and write a summary"</em>,
            the LLM:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Understands</strong> the request and identifies two main components: research and writing</li>
            <li><strong>Plans</strong> the sequence: search for info → read sources → extract key points → write summary</li>
            <li><strong>Selects tools</strong>: web search tool, text analysis, document generation</li>
            <li><strong>Reasons</strong> about which sources are most relevant and credible</li>
            <li><strong>Generates</strong> coherent, well-structured output based on gathered information</li>
          </ol>
        </div>
      </Card>
    </div>
  ),
  "intro-tools": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tools & Functions</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        While the LLM provides reasoning power, it's limited to text processing. To interact with the real world,
        an agent needs <strong>"limbs"</strong> - external capabilities called <strong>tools</strong>. Tools enable
        agents to search the web, access databases, run code, send emails, and much more.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🛠️ Common Types of Agent Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">🌐 Web Search</h4>
              <p className="text-xs text-foreground/70">Google, Bing, Serper APIs for finding current information</p>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">📊 Database Access</h4>
              <p className="text-xs text-foreground/70">SQL queries, vector DB searches, NoSQL operations</p>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">💻 Code Execution</h4>
              <p className="text-xs text-foreground/70">Python interpreter, JavaScript sandbox, shell commands</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">📧 Communication</h4>
              <p className="text-xs text-foreground/70">Email, Slack, SMS, webhooks for notifications</p>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">📄 Document Processing</h4>
              <p className="text-xs text-foreground/70">PDF parsing, web scraping, text extraction</p>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">🔧 API Integrations</h4>
              <p className="text-xs text-foreground/70">REST APIs, GraphQL, third-party services</p>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">How Tools Work</h3>
        <div className="space-y-4">
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Tool Definition</h4>
                <p className="text-sm text-foreground/70">
                  Each tool has a name, description, and parameters that tell the LLM when and how to use it.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Tool Selection</h4>
                <p className="text-sm text-foreground/70">
                  The LLM analyzes the task and decides which tool(s) to use based on their descriptions.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Tool Execution</h4>
                <p className="text-sm text-foreground/70">
                  The agent calls the tool with specific parameters and receives results back.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-1">Result Integration</h4>
                <p className="text-sm text-foreground/70">
                  The LLM processes the tool's output and incorporates it into the final response.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Example: Search Tool in Action</h3>
        <Card className="p-4 bg-muted/50 border border-border">
          <p className="text-sm mb-3"><strong>User:</strong> "What are the latest AI breakthroughs in 2025?"</p>
          <div className="space-y-2 text-sm text-foreground/70 ml-4">
            <p>→ Agent recognizes need for current information</p>
            <p>→ Selects <code className="bg-background px-2 py-0.5 rounded">web_search</code> tool</p>
            <p>→ Executes: <code className="bg-background px-2 py-0.5 rounded">search("AI breakthroughs 2025")</code></p>
            <p>→ Receives search results with recent articles</p>
            <p>→ LLM synthesizes information into coherent response</p>
          </div>
        </Card>
      </div>
    </div>
  ),
  "intro-memory": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Agent Memory</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        For an agent to function effectively over time, it must possess <strong>memory</strong>. Without memory,
        every interaction is treated in isolation, and the agent can't learn from past experiences or maintain
        continuity across conversations. Memory transforms a simple AI model into an intelligent agent capable
        of personalized, context-aware interactions.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">💾 Types of Agent Memory</h3>
        <div className="space-y-4">
          <div className="p-4 bg-background/50 rounded-lg border-l-4 border-primary/50">
            <h4 className="font-semibold text-foreground mb-2">1. Short-Term Memory (Conversation History)</h4>
            <p className="text-sm text-foreground/70 mb-2">
              Stores recent messages and context from the current conversation session.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Use Case:</strong> Maintaining context within a single conversation<br />
              <strong>Duration:</strong> Current session only<br />
              <strong>Storage:</strong> In-memory, limited by token window
            </div>
          </div>

          <div className="p-4 bg-background/50 rounded-lg border-l-4 border-accent/50">
            <h4 className="font-semibold text-foreground mb-2">2. Long-Term Memory (Persistent Knowledge)</h4>
            <p className="text-sm text-foreground/70 mb-2">
              Stores facts, preferences, and information that should persist across multiple sessions.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Use Case:</strong> User preferences, learned facts, historical data<br />
              <strong>Duration:</strong> Indefinite (until manually deleted)<br />
              <strong>Storage:</strong> Databases, vector stores
            </div>
          </div>

          <div className="p-4 bg-background/50 rounded-lg border-l-4 border-green-500/50">
            <h4 className="font-semibold text-foreground mb-2">3. Working Memory (Task State)</h4>
            <p className="text-sm text-foreground/70 mb-2">
              Temporary storage for intermediate results and state during multi-step task execution.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Use Case:</strong> Storing results between steps in a workflow<br />
              <strong>Duration:</strong> Current task only<br />
              <strong>Storage:</strong> In-memory state objects
            </div>
          </div>

          <div className="p-4 bg-background/50 rounded-lg border-l-4 border-yellow-500/50">
            <h4 className="font-semibold text-foreground mb-2">4. Semantic Memory (Knowledge Base)</h4>
            <p className="text-sm text-foreground/70 mb-2">
              Domain-specific knowledge, facts, and information retrieved through RAG systems.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Use Case:</strong> Company docs, product knowledge, domain expertise<br />
              <strong>Duration:</strong> Persistent, updated periodically<br />
              <strong>Storage:</strong> Vector databases (ChromaDB, Pinecone)
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Memory in Practice: Customer Service Agent</h3>
        <Card className="p-4 bg-muted/50 border border-border">
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-foreground">First Interaction:</p>
              <p className="text-foreground/70 ml-4">
                <strong>User:</strong> "I'm having trouble with my order #12345"<br />
                <strong>Agent:</strong> Checks order database, stores order details in working memory
              </p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-semibold text-foreground">Later in Same Conversation:</p>
              <p className="text-foreground/70 ml-4">
                <strong>User:</strong> "When will it arrive?"<br />
                <strong>Agent:</strong> Uses short-term memory to know "it" refers to order #12345
              </p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="font-semibold text-foreground">Next Day:</p>
              <p className="text-foreground/70 ml-4">
                <strong>User:</strong> "Hi, it's me again"<br />
                <strong>Agent:</strong> Uses long-term memory to recall previous issue and user preferences
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">Implementation Approaches</h3>
        <div className="space-y-3 text-foreground/80">
          <div className="flex gap-3">
            <span className="text-2xl">🔹</span>
            <div>
              <strong>Conversation Buffers:</strong> Simple list of recent messages, easy to implement
              but limited by token constraints.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🔹</span>
            <div>
              <strong>Summarization:</strong> Periodically summarize old conversations to save tokens
              while retaining key information.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🔹</span>
            <div>
              <strong>Vector Databases:</strong> Store embeddings of past conversations for semantic search
              and retrieval of relevant context.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🔹</span>
            <div>
              <strong>Knowledge Graphs:</strong> Structured representation of entities and relationships
              for complex reasoning.
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
  "intro-loop": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">The Agentic Loop (ReAct Pattern)</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        The <strong>Agentic Loop</strong>, often implemented as the <strong>ReAct (Reasoning + Acting)</strong> pattern,
        is the core operational cycle that enables agents to work autonomously. It's a continuous process of
        observation, reasoning, action, and learning that allows agents to iteratively solve complex problems.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🔄 The ReAct Cycle</h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">🎯 Thought (Reasoning)</h4>
              <p className="text-sm text-foreground/70">
                The agent analyzes the current state, considers what it knows, and decides what to do next.
                This is where the LLM's reasoning capabilities shine.
              </p>
              <div className="mt-2 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                Example: "I need to find information about AI trends in 2025. I should use the web search tool."
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-lg">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">⚡ Action (Acting)</h4>
              <p className="text-sm text-foreground/70">
                Based on its reasoning, the agent selects and executes a specific tool or generates a response.
                This is where the agent interacts with the external world.
              </p>
              <div className="mt-2 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                Example: Execute <code className="bg-background px-1 rounded">web_search("AI trends 2025")</code>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">👁️ Observation (Learning)</h4>
              <p className="text-sm text-foreground/70">
                The agent receives and processes the results from its action. This new information updates
                the agent's understanding and informs the next iteration.
              </p>
              <div className="mt-2 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                Example: "Received 10 articles about AI trends. I should now analyze these and extract key insights."
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-lg">
              🔁
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">🔄 Repeat</h4>
              <p className="text-sm text-foreground/70">
                The cycle continues until the task is complete or a maximum number of iterations is reached.
                Each iteration builds on previous knowledge and actions.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Complete Example: Research Agent</h3>
        <Card className="p-5 bg-muted/30 border border-border">
          <p className="font-semibold mb-3 text-foreground">Task: "Write a report on AI Agent frameworks"</p>
          <div className="space-y-4 text-sm">
            <div className="p-3 bg-background/80 rounded border-l-4 border-blue-500">
              <p className="font-semibold text-blue-400">Iteration 1 - Thought:</p>
              <p className="text-foreground/70">"I need to search for information about AI agent frameworks"</p>
              <p className="font-semibold text-green-400 mt-2">Action:</p>
              <p className="text-foreground/70">web_search("AI agent frameworks 2025")</p>
              <p className="font-semibold text-purple-400 mt-2">Observation:</p>
              <p className="text-foreground/70">Found articles about LangChain, CrewAI, AutoGen, LangGraph</p>
            </div>

            <div className="p-3 bg-background/80 rounded border-l-4 border-blue-500">
              <p className="font-semibold text-blue-400">Iteration 2 - Thought:</p>
              <p className="text-foreground/70">"I should get detailed info about each framework"</p>
              <p className="font-semibold text-green-400 mt-2">Action:</p>
              <p className="text-foreground/70">web_search("LangChain features")</p>
              <p className="font-semibold text-purple-400 mt-2">Observation:</p>
              <p className="text-foreground/70">Retrieved documentation and feature lists</p>
            </div>

            <div className="p-3 bg-background/80 rounded border-l-4 border-blue-500">
              <p className="font-semibold text-blue-400">Iteration 3 - Thought:</p>
              <p className="text-foreground/70">"I have enough information. Time to write the report"</p>
              <p className="font-semibold text-green-400 mt-2">Action:</p>
              <p className="text-foreground/70">generate_report(gathered_info)</p>
              <p className="font-semibold text-purple-400 mt-2">Observation:</p>
              <p className="text-foreground/70">Report created successfully. Task complete! ✅</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">Why the ReAct Pattern Works</h3>
        <div className="space-y-3 text-foreground/80">
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Iterative Problem Solving:</strong> Complex tasks are broken down into manageable steps,
              each building on previous results.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Explainability:</strong> The agent's reasoning is visible at each step, making it easier
              to understand and debug its behavior.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Adaptive Behavior:</strong> The agent can change its strategy based on the results of
              previous actions, making it more flexible.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong>Error Recovery:</strong> If an action fails, the agent can reason about the failure and
              try a different approach in the next iteration.
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
        <h3 className="text-xl font-semibold mb-3">⚠️ Loop Control Considerations</h3>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Max Iterations:</strong> Always set a limit to prevent infinite loops (typically 5-20 iterations)</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Early Stopping:</strong> Detect when the task is complete to avoid unnecessary API calls</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Timeout Handling:</strong> Set time limits to prevent hanging on slow operations</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span><strong>Cost Management:</strong> Each iteration costs API calls; optimize for efficiency</span>
          </li>
        </ul>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎨 Other Agent Design Patterns</h2>
        <p className="text-foreground/80 mb-4">
          While <strong>ReAct</strong> is the most popular pattern, there are several other powerful design patterns
          for building AI agents. Each has its own strengths and use cases.
        </p>

        <div className="space-y-4">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📋</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Plan-and-Execute</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  The agent first creates a complete plan (list of steps), then executes them sequentially.
                  More structured than ReAct but less flexible.
                </p>
                <div className="p-3 bg-background/50 rounded text-xs space-y-1">
                  <p><strong>Step 1:</strong> Generate complete plan → ["Search web", "Analyze data", "Write report"]</p>
                  <p><strong>Step 2:</strong> Execute plan steps one by one</p>
                  <p><strong>Step 3:</strong> Return final result</p>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  <strong>Best for:</strong> Well-defined tasks with predictable workflows
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🪞</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. Reflection (Self-Critique)</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  The agent generates output, then critiques its own work and iteratively improves it.
                  Great for quality-focused tasks.
                </p>
                <div className="p-3 bg-background/50 rounded text-xs space-y-1">
                  <p><strong>Generate:</strong> Create initial output</p>
                  <p><strong>Reflect:</strong> Analyze what's good/bad</p>
                  <p><strong>Improve:</strong> Revise based on critique</p>
                  <p><strong>Repeat:</strong> Until quality threshold met</p>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  <strong>Best for:</strong> Content generation, code review, creative tasks
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌳</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Tree of Thoughts (ToT)</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Explores multiple reasoning paths in parallel (like a tree), evaluates them, and picks the best.
                  More computational but finds better solutions.
                </p>
                <div className="p-3 bg-background/50 rounded text-xs space-y-1">
                  <p><strong>Branch:</strong> Generate multiple possible next steps</p>
                  <p><strong>Evaluate:</strong> Score each branch</p>
                  <p><strong>Expand:</strong> Continue from best branches</p>
                  <p><strong>Select:</strong> Choose optimal path</p>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  <strong>Best for:</strong> Complex problem-solving, strategic planning, optimization
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⛓️</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">4. Chain of Thought (CoT)</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  The agent breaks down reasoning into explicit steps within a single LLM call.
                  Simpler than ReAct but no tool use.
                </p>
                <div className="p-3 bg-background/50 rounded text-xs space-y-1">
                  <p><strong>Prompt:</strong> "Let's solve this step by step:"</p>
                  <p><strong>Step 1:</strong> LLM reasons through first part</p>
                  <p><strong>Step 2:</strong> Builds on previous reasoning</p>
                  <p><strong>Final:</strong> Returns complete answer</p>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  <strong>Best for:</strong> Math problems, logical reasoning, analysis tasks
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/30">
            <div className="flex items-start gap-3">
              <span className="text-3xl">👥</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">5. Multi-Agent Collaboration</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Multiple specialized agents work together, each with its own role. They communicate,
                  delegate, and collaborate to solve complex tasks.
                </p>
                <div className="p-3 bg-background/50 rounded text-xs space-y-1">
                  <p><strong>Agents:</strong> Researcher, Analyst, Writer, Editor</p>
                  <p><strong>Communication:</strong> Agents message each other</p>
                  <p><strong>Coordination:</strong> Supervisor manages workflow</p>
                  <p><strong>Result:</strong> Combined output from all agents</p>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  <strong>Best for:</strong> Complex workflows, team-like tasks, role-based work
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-teal-500/10 to-teal-600/10 border border-teal-500/30">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔧</span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">6. Tool-Use (Function Calling)</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  The agent has access to specific tools/functions and decides when to use them.
                  Similar to ReAct but often simpler with pre-defined tool selection.
                </p>
                <div className="p-3 bg-background/50 rounded text-xs space-y-1">
                  <p><strong>Available Tools:</strong> [calculator, search, database, email]</p>
                  <p><strong>LLM Decides:</strong> Which tool to call with what parameters</p>
                  <p><strong>Execute:</strong> Run the selected tool</p>
                  <p><strong>Continue:</strong> Use tool result in response</p>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  <strong>Best for:</strong> API integrations, database queries, external actions
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-3">🎯 Which Pattern to Choose?</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="p-3 bg-background/50 rounded">
            <p className="font-semibold text-foreground mb-2">⚡ Need Speed & Simplicity?</p>
            <p className="text-foreground/70">→ Chain of Thought, Tool-Use</p>
          </div>
          <div className="p-3 bg-background/50 rounded">
            <p className="font-semibold text-foreground mb-2">🎯 Need Flexibility & Adaptation?</p>
            <p className="text-foreground/70">→ ReAct (Most Popular!)</p>
          </div>
          <div className="p-3 bg-background/50 rounded">
            <p className="font-semibold text-foreground mb-2">📋 Need Structure & Planning?</p>
            <p className="text-foreground/70">→ Plan-and-Execute</p>
          </div>
          <div className="p-3 bg-background/50 rounded">
            <p className="font-semibold text-foreground mb-2">✨ Need Quality & Refinement?</p>
            <p className="text-foreground/70">→ Reflection</p>
          </div>
          <div className="p-3 bg-background/50 rounded">
            <p className="font-semibold text-foreground mb-2">🧠 Need Optimal Solutions?</p>
            <p className="text-foreground/70">→ Tree of Thoughts</p>
          </div>
          <div className="p-3 bg-background/50 rounded">
            <p className="font-semibold text-foreground mb-2">👥 Need Team Collaboration?</p>
            <p className="text-foreground/70">→ Multi-Agent</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-foreground/70 border-t border-border/30 pt-3">
          💡 <strong>Pro Tip:</strong> You can <em>combine</em> patterns! For example: Use ReAct with Reflection,
          or Multi-Agent with Plan-and-Execute. The best systems often use hybrid approaches.
        </p>
      </div>
    </div>
  ),
  "react-intro": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Introduction to ReAct Framework</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        <strong>ReAct (Reasoning and Acting)</strong> is a foundational paradigm for building LLM-powered agents.
        It provides a structured methodology that combines the LLM's chain-of-thought reasoning capabilities with
        its ability to use external tools, creating agents that can think through problems step-by-step while
        taking concrete actions.
      </p>

      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/30">
        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
          <span>🌟</span> Why ReAct is Universal
        </h3>
        <p className="text-foreground/80 mb-4">
          ReAct isn't just another framework — it's a <strong>core design pattern</strong> that ALL major AI agent frameworks implement!
          Whether you use LangChain, LangGraph, CrewAI, or AutoGen, they all build upon ReAct principles.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 bg-background/50 rounded flex items-center gap-2">
            <span className="text-blue-500 font-bold">📚</span>
            <span className="text-sm text-foreground/80"><strong>LangChain:</strong> Built-in ReAct agents</span>
          </div>
          <div className="p-3 bg-background/50 rounded flex items-center gap-2">
            <span className="text-purple-500 font-bold">🎯</span>
            <span className="text-sm text-foreground/80"><strong>LangGraph:</strong> Stateful ReAct loops</span>
          </div>
          <div className="p-3 bg-background/50 rounded flex items-center gap-2">
            <span className="text-green-500 font-bold">🎭</span>
            <span className="text-sm text-foreground/80"><strong>CrewAI:</strong> Multi-agent ReAct coordination</span>
          </div>
          <div className="p-3 bg-background/50 rounded flex items-center gap-2">
            <span className="text-orange-500 font-bold">💻</span>
            <span className="text-sm text-foreground/80"><strong>AutoGen:</strong> Conversational ReAct execution</span>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🧠 Core Philosophy</h3>
        <p className="text-foreground/80 mb-4">
          ReAct is inspired by the human cognitive process: we don't just think OR act, we alternate between
          both. We think about what to do, take action, observe the results, and adjust our thinking based on
          what we learned.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">🤔 Traditional Approach</h4>
            <p className="text-sm text-foreground/70">
              Generate a complete plan upfront, then execute all steps. Fails if environment changes or
              unexpected issues arise.
            </p>
          </div>
          <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
            <h4 className="font-semibold text-foreground mb-2">⚡ ReAct Approach</h4>
            <p className="text-sm text-foreground/70">
              Think, act, observe, adjust. Each step informs the next, allowing dynamic adaptation to
              changing conditions and unexpected results.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Key Principles</h3>
        <div className="space-y-3">
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <h4 className="font-semibold mb-1">Explicit Reasoning</h4>
                <p className="text-sm text-foreground/70">
                  The agent's thought process is visible and auditable. You can see why the agent made
                  each decision, making debugging and optimization easier.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <h4 className="font-semibold mb-1">Interleaved Execution</h4>
                <p className="text-sm text-foreground/70">
                  Thought → Action → Observation steps are alternated, not batched. Each action's result
                  influences the next thought.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <h4 className="font-semibold mb-1">Dynamic Adaptation</h4>
                <p className="text-sm text-foreground/70">
                  The agent can change its approach based on environmental feedback, handling unexpected
                  situations gracefully.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-5 bg-muted/30 border border-border">
        <h3 className="text-xl font-semibold mb-3">Example Comparison</h3>
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-2">Task: "Book a flight to Paris"</p>
            <div className="p-3 bg-background/80 rounded">
              <p className="font-semibold text-muted-foreground mb-2">❌ Non-ReAct (Rigid Plan):</p>
              <p className="text-foreground/70">
                1. Search for flights<br />
                2. Select cheapest option<br />
                3. Complete booking<br />
                <em className="text-yellow-500">Problem: If no direct flights exist, plan fails completely</em>
              </p>
            </div>
            <div className="p-3 bg-primary/10 rounded mt-2">
              <p className="font-semibold text-primary mb-2">✅ ReAct (Adaptive):</p>
              <p className="text-foreground/70">
                <strong>Thought:</strong> "Let me search for direct flights"<br />
                <strong>Action:</strong> search_flights(destination="Paris", direct=true)<br />
                <strong>Observation:</strong> No direct flights available<br />
                <strong>Thought:</strong> "I should try connecting flights instead"<br />
                <strong>Action:</strong> search_flights(destination="Paris", direct=false)<br />
                <strong>Observation:</strong> Found 5 connecting flights<br />
                <em className="text-green-500">Adapts strategy based on results!</em>
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-4">🔧 How Frameworks Implement ReAct</h3>
        <div className="space-y-3">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">LangChain</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Provides <code className="text-primary">create_react_agent()</code> function for simple ReAct agents.
                  Uses prompt templates to guide the Thought → Action → Observation cycle.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Best for:</strong> Quick prototypes, simple workflows, RAG + agents
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">LangGraph</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Builds <strong>stateful ReAct loops</strong> with explicit state management. You define nodes for
                  "agent" (think + decide) and "tools" (act), with edges controlling flow.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Best for:</strong> Complex agents, human-in-the-loop, persistent state
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎭</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">CrewAI</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Abstracts ReAct into high-level "Agent" and "Task" concepts. Each agent internally uses ReAct
                  to complete tasks, coordinating with other agents.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Best for:</strong> Multi-agent teams, role-based workflows, content pipelines
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💻</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">AutoGen</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Implements ReAct through <strong>conversational turns</strong>. Agents chat, suggest code,
                  execute it, observe results, and adjust — all via natural conversation.
                </p>
                <p className="text-xs text-foreground/60">
                  <strong>Best for:</strong> Code generation, data analysis, exploratory problem-solving
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <span>💡</span> Why We Use ReAct
        </h3>
        <div className="space-y-2 text-sm text-foreground/80">
          <p>
            <strong>1. Transparency:</strong> You can see and debug the agent's reasoning process
          </p>
          <p>
            <strong>2. Adaptability:</strong> Agents can change strategy mid-execution based on feedback
          </p>
          <p>
            <strong>3. Reliability:</strong> Grounded in tool outputs, not just LLM hallucinations
          </p>
          <p>
            <strong>4. Universality:</strong> Works across all major frameworks — learn once, apply everywhere
          </p>
        </div>
        <p className="mt-4 text-sm text-foreground/70 border-t border-border/30 pt-3">
          🎯 <strong>Bottom line:</strong> ReAct is the <em>beating heart</em> of modern AI agents.
          Understanding ReAct means understanding how LangChain, LangGraph, CrewAI, and AutoGen all work under the hood!
        </p>
      </div>
    </div>
  ),
  "react-loop": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">The ReAct Loop Implementation</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        The ReAct loop is the practical implementation of the framework's philosophy. It's a continuous cycle that
        runs until the task is complete or a stopping condition is met.
      </p>

      <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <h3 className="text-xl font-semibold mb-4">🔄 The Complete Loop Cycle</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
              💭
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Thought (Internal Reasoning)</h4>
              <p className="text-sm text-foreground/70 mb-2">
                The LLM generates internal reasoning to understand the current state and decide what to do next.
              </p>
              <div className="p-2 bg-background/50 rounded text-xs font-mono text-muted-foreground">
                "Based on the user's query, I need to search for recent AI papers. I'll use the web_search tool."
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
                ⚡
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Action (Tool Execution)</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  The agent executes the chosen tool with specific parameters based on its reasoning.
                </p>
                <div className="p-2 bg-background/50 rounded text-xs font-mono text-muted-foreground">
                  tool_name: "web_search"<br />
                  parameters: {`{query: "AI research papers 2025", limit: 10}`}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                👁️
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Observation (Result Processing)</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  The agent receives and processes the tool's output, adding it to the context for the next iteration.
                </p>
                <div className="p-2 bg-background/50 rounded text-xs font-mono text-muted-foreground">
                  "Found 10 papers on AI agents. Top result: 'ReAct: Synergizing Reasoning and Acting in LLMs'"
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                🔁
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Repeat or Finish</h4>
                <p className="text-sm text-foreground/70">
                  The loop continues with a new thought based on the observation, or terminates if the task is complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Loop Control & Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2">✅ Do's</h4>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>• Set max iterations (5-20 typical)</li>
              <li>• Include clear stop conditions</li>
              <li>• Log each step for debugging</li>
              <li>• Handle tool failures gracefully</li>
              <li>• Track token usage per iteration</li>
            </ul>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2">❌ Don'ts</h4>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>• Don't allow infinite loops</li>
              <li>• Don't ignore tool errors</li>
              <li>• Don't lose context between steps</li>
              <li>• Don't skip observation parsing</li>
              <li>• Don't forget cost monitoring</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  ),
  "react-benefits": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Benefits of ReAct Framework</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        The ReAct framework has become the de facto standard for building AI agents because it addresses many
        limitations of traditional approaches while providing clear advantages in reliability, transparency, and adaptability.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-5 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎯</span>
            <div>
              <h3 className="text-lg font-semibold mb-2">Reduced Hallucination</h3>
              <p className="text-sm text-foreground/70">
                By grounding reasoning in real-time external information from tools, ReAct significantly
                reduces factually incorrect outputs. The agent bases responses on actual retrieved data,
                not just training knowledge.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🔍</span>
            <div>
              <h3 className="text-lg font-semibold mb-2">Enhanced Explainability</h3>
              <p className="text-sm text-foreground/70">
                Explicit thought traces make the agent's decision-making transparent and auditable. You can see
                exactly why the agent chose each action, making it easier to debug, optimize, and trust.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🔄</span>
            <div>
              <h3 className="text-lg font-semibold mb-2">Greater Adaptability</h3>
              <p className="text-sm text-foreground/70">
                Agents dynamically adapt plans based on action outcomes, gracefully handling unforeseen obstacles.
                If one approach fails, the agent can reason about alternatives and try a different strategy.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🛠️</span>
            <div>
              <h3 className="text-lg font-semibold mb-2">Versatile Tool Integration</h3>
              <p className="text-sm text-foreground/70">
                Works seamlessly with any external tools and APIs without requiring model retraining. Simply
                provide tool descriptions, and the agent learns to use them appropriately.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💰</span>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cost Efficiency</h3>
              <p className="text-sm text-foreground/70">
                Only retrieves and processes information when needed. Unlike approaches that embed all data
                in prompts, ReAct fetches only relevant context, reducing token costs significantly.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
          <div className="flex items-start gap-3">
            <span className="text-3xl">⚡</span>
            <div>
              <h3 className="text-lg font-semibold mb-2">Incremental Progress</h3>
              <p className="text-sm text-foreground/70">
                Even if the final goal isn't achieved, the agent makes visible progress with each step.
                Partial results are better than complete failure in monolithic approaches.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">Why ReAct Became the Standard</h3>
        <div className="space-y-3 text-foreground/80">
          <p>
            ReAct has been adopted by virtually all major agent frameworks (LangChain, AutoGen, CrewAI, LangGraph)
            because it provides the right balance of:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Simplicity:</strong> Easy to understand and implement</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Flexibility:</strong> Works across diverse use cases</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Reliability:</strong> Reduces errors through grounding</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Transparency:</strong> Makes agent behavior understandable</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  ),
  "rag-what": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">What is RAG?</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        <strong>Retrieval-Augmented Generation (RAG)</strong> is an AI framework that enhances large language models
        by connecting them to external knowledge bases. Instead of relying solely on training data, RAG allows agents
        to retrieve and reference specific, current, or proprietary information in real-time, dramatically improving
        accuracy and relevance.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🎯 The Core Problem RAG Solves</h3>
        <div className="space-y-4">
          <div className="p-4 bg-background/50 rounded-lg border-l-4 border-red-500/50">
            <h4 className="font-semibold text-foreground mb-2">❌ Without RAG</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Knowledge cutoff dates (LLM trained on old data)</li>
              <li>• Can't access company-specific information</li>
              <li>• Hallucinations when asked about unknown topics</li>
              <li>• Expensive retraining required for updates</li>
              <li>• No source attribution or verification</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/20 rounded-lg border-l-4 border-primary/50 border-primary/30">
            <h4 className="font-semibold text-foreground mb-2">✅ With RAG</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Access to real-time, current information</li>
              <li>• Query your own documents and databases</li>
              <li>• Grounded responses with source citations</li>
              <li>• Update knowledge without retraining</li>
              <li>• Transparent and verifiable answers</li>
            </ul>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">How RAG Works (Simplified)</h3>
        <div className="space-y-3">
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">User Asks a Question</h4>
                <p className="text-sm text-foreground/70">
                  "What are our Q4 sales figures?"
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Retrieval: Search Knowledge Base</h4>
                <p className="text-sm text-foreground/70">
                  System searches through indexed documents (reports, docs, databases) for relevant information
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Augmentation: Add Context to Prompt</h4>
                <p className="text-sm text-foreground/70">
                  Retrieved documents are combined with the original question: "Based on this Q4 report: [data]... answer the question"
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-1">Generation: LLM Creates Answer</h4>
                <p className="text-sm text-foreground/70">
                  LLM generates response based on retrieved context, with citations to source documents
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🌟 Key Advantages of RAG</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">No Retraining Required</strong>
                <p className="text-xs text-foreground/70">Update knowledge by adding new documents, not expensive model retraining</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Current Information</strong>
                <p className="text-xs text-foreground/70">Access real-time data beyond the model's training cutoff date</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Domain Expertise</strong>
                <p className="text-xs text-foreground/70">Inject company-specific or specialized knowledge</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Source Attribution</strong>
                <p className="text-xs text-foreground/70">Cite exact sources, making answers verifiable and trustworthy</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Cost Effective</strong>
                <p className="text-xs text-foreground/70">Much cheaper than fine-tuning or training custom models</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Reduced Hallucination</strong>
                <p className="text-xs text-foreground/70">Grounded in actual documents, not speculation</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-5 bg-muted/30 border border-border">
        <h3 className="text-xl font-semibold mb-3">Real-World Use Cases</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">🏢 Enterprise Knowledge Base</strong>
            <p className="text-foreground/70 mt-1">
              Answer employee questions using company wikis, policies, and internal documentation
            </p>
          </div>
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">📚 Research Assistant</strong>
            <p className="text-foreground/70 mt-1">
              Query scientific papers, legal documents, or academic resources with accurate citations
            </p>
          </div>
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">💬 Customer Support</strong>
            <p className="text-foreground/70 mt-1">
              Provide accurate answers from product manuals, FAQs, and support tickets
            </p>
          </div>
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">⚖️ Legal & Compliance</strong>
            <p className="text-foreground/70 mt-1">
              Search through contracts, regulations, and case law for relevant precedents
            </p>
          </div>
        </div>
      </Card>
    </div>
  ),
  "rag-architecture": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">RAG Architecture</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        RAG systems consist of two distinct phases: an <strong>offline indexing stage</strong> where documents are
        prepared and stored, and an <strong>online retrieval stage</strong> that happens in real-time when users
        ask questions. Understanding this architecture is key to building effective RAG systems.
      </p>

      <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <h3 className="text-xl font-semibold mb-4">📥 Phase 1: Offline Indexing (Setup)</h3>
        <p className="text-sm text-foreground/70 mb-4">
          This happens once (or periodically) to prepare your knowledge base. It's like building a searchable library.
        </p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Load Documents</h4>
              <p className="text-sm text-foreground/70 mb-2">
                Ingest data from various sources using Document Loaders
              </p>
              <div className="p-2 bg-background/50 rounded text-xs">
                <strong>Sources:</strong> PDFs, Word docs, web pages, databases, APIs, CSVs, etc.
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
              2
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Split into Chunks</h4>
              <p className="text-sm text-foreground/70 mb-2">
                Break documents into smaller, manageable pieces (typically 500-1500 characters)
              </p>
              <div className="p-2 bg-background/50 rounded text-xs">
                <strong>Why?</strong> Smaller chunks improve retrieval relevance and fit within LLM context limits
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
              3
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Generate Embeddings</h4>
              <p className="text-sm text-foreground/70 mb-2">
                Convert each text chunk into a high-dimensional vector (array of numbers)
              </p>
              <div className="p-2 bg-background/50 rounded text-xs">
                <strong>Models:</strong> OpenAI text-embedding-ada-002, sentence-transformers, Cohere, etc.
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
              4
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Store in Vector Database</h4>
              <p className="text-sm text-foreground/70 mb-2">
                Save embeddings with metadata in a specialized database optimized for similarity search
              </p>
              <div className="p-2 bg-background/50 rounded text-xs">
                <strong>Options:</strong> ChromaDB, Pinecone, Weaviate, FAISS, Qdrant, Milvus
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
        <h3 className="text-xl font-semibold mb-4">🔄 Phase 2: Online Retrieval & Generation (Runtime)</h3>
        <p className="text-sm text-foreground/70 mb-4">
          This happens every time a user asks a question. It's fast because the indexing work is already done.
        </p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Query Embedding</h4>
              <p className="text-sm text-foreground/70">
                Convert user's question into an embedding vector using the same embedding model
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
              2
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Similarity Search</h4>
              <p className="text-sm text-foreground/70">
                Find the most similar document chunks from the vector database (typically top 3-10 results)
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
              3
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Context Augmentation</h4>
              <p className="text-sm text-foreground/70">
                Combine retrieved chunks with the original query into a single prompt for the LLM
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
              4
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">Response Generation</h4>
              <p className="text-sm text-foreground/70">
                LLM generates an answer based on the retrieved context, often including source citations
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🔍 How Similarity Search Works</h3>
        <p className="text-sm text-foreground/80 mb-3">
          Vector embeddings represent text as points in high-dimensional space. Similar texts are "close" to each other:
        </p>
        <div className="space-y-2 text-sm text-foreground/70">
          <div className="p-3 bg-muted/50 rounded">
            <strong>Example:</strong> If you ask "How do I reset my password?", the system finds chunks about
            password resets, account recovery, login issues - not just exact keyword matches.
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong>Semantic Search:</strong> Understands meaning, not just keywords. "CEO" matches "Chief Executive Officer",
            "dog" matches "canine", "automobile" matches "car".
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-3">⚙️ Key Parameters to Tune</h4>
          <ul className="text-sm text-foreground/70 space-y-2">
            <li>• <strong>Chunk size:</strong> 500-1500 chars typical</li>
            <li>• <strong>Chunk overlap:</strong> 10-20% prevents info loss</li>
            <li>• <strong>Top-k results:</strong> 3-10 chunks to retrieve</li>
            <li>• <strong>Similarity threshold:</strong> Minimum relevance score</li>
          </ul>
        </Card>
        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-3">💡 Optimization Tips</h4>
          <ul className="text-sm text-foreground/70 space-y-2">
            <li>• Use metadata filters (date, category, author)</li>
            <li>• Implement re-ranking for better results</li>
            <li>• Cache frequent queries</li>
            <li>• Hybrid search (vector + keyword)</li>
          </ul>
        </Card>
      </div>
    </div>
  ),
  "rag-why": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Why RAG is Essential for AI Agents</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        While LLMs are powerful, they have critical limitations that RAG addresses. Understanding these limitations
        helps explain why RAG has become a foundational technique for production AI systems.
      </p>

      <Card className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
        <h3 className="text-xl font-semibold mb-4">⚠️ LLM Limitations Without RAG</h3>
        <div className="space-y-3">
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">1. Knowledge Cutoff Problem</h4>
            <p className="text-sm text-foreground/70 mb-2">
              LLMs are trained on data up to a specific date (e.g., GPT-4 trained on data until April 2023).
              They don't know about anything that happened after training.
            </p>
            <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
              <strong>Example:</strong> Ask GPT-4 (without RAG) about events in 2024 → It will say "I don't have
              information about that" or worse, make something up (hallucinate).
            </div>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">2. No Access to Private Data</h4>
            <p className="text-sm text-foreground/70 mb-2">
              LLMs can't access your company's internal documents, customer data, or proprietary information
              because they weren't part of training data.
            </p>
            <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
              <strong>Example:</strong> "What's our return policy?" → LLM doesn't know your specific policies
            </div>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">3. Hallucination Risk</h4>
            <p className="text-sm text-foreground/70 mb-2">
              When uncertain, LLMs often "hallucinate" - generating confident-sounding but incorrect information.
            </p>
            <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
              <strong>Example:</strong> Ask about an obscure topic → LLM may invent facts, dates, or sources
            </div>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">4. No Source Attribution</h4>
            <p className="text-sm text-foreground/70 mb-2">
              Pure LLMs can't cite sources or provide evidence for their claims, making verification impossible.
            </p>
            <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
              <strong>Impact:</strong> Hard to trust for business-critical or regulated industries
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
        <h3 className="text-xl font-semibold mb-4">✅ How RAG Solves These Problems</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              Current Information
            </h4>
            <p className="text-sm text-foreground/70">
              Update your knowledge base anytime without retraining. Add today's news, this month's reports,
              or real-time data sources.
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              Private Data Access
            </h4>
            <p className="text-sm text-foreground/70">
              Index your internal documents, databases, and proprietary information. The LLM accesses it only
              when needed, keeping data secure.
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Grounded Responses
            </h4>
            <p className="text-sm text-foreground/70">
              Answers are based on retrieved documents, not speculation. If info isn't in the knowledge base,
              the system can say "I don't have that information."
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Source Citations
            </h4>
            <p className="text-sm text-foreground/70">
              Every answer includes references to source documents, making it easy to verify and audit responses.
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-2xl">💰</span>
              Cost Effective
            </h4>
            <p className="text-sm text-foreground/70">
              Avoid expensive fine-tuning or training. Add new knowledge by simply uploading documents.
              Pay only for storage and retrieval.
            </p>
          </div>

          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              Domain Expertise
            </h4>
            <p className="text-sm text-foreground/70">
              Transform a general LLM into a domain expert by providing specialized documentation (medical,
              legal, technical, etc.).
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🏆 When RAG is the Right Choice</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="flex gap-3">
            <span className="text-green-500 flex-shrink-0">✓</span>
            <p><strong>Frequently Updated Information:</strong> News, product catalogs, pricing, policies</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500 flex-shrink-0">✓</span>
            <p><strong>Large Knowledge Bases:</strong> Documentation too big to fit in a single prompt</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500 flex-shrink-0">✓</span>
            <p><strong>Factual Accuracy Required:</strong> Regulated industries, customer support, research</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500 flex-shrink-0">✓</span>
            <p><strong>Source Attribution Needed:</strong> Legal, academic, compliance use cases</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500 flex-shrink-0">✓</span>
            <p><strong>Multi-Tenant Applications:</strong> Each customer has their own knowledge base</p>
          </div>
        </div>
      </Card>

      <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
        <h3 className="text-lg font-semibold mb-3">💡 Real-World Impact</h3>
        <p className="text-sm text-foreground/70">
          Companies using RAG report <strong>85%+ reduction in hallucinations</strong>, <strong>10x faster
            knowledge updates</strong> compared to fine-tuning, and <strong>significant cost savings</strong> by
          using smaller, faster LLMs enhanced with RAG instead of larger expensive models.
        </p>
      </Card>
    </div>
  ),
  "langchain-intro": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Introduction to LangChain</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        <strong>LangChain</strong> is the most popular open-source framework for building LLM applications.
        It provides a comprehensive toolkit with pre-built components, integrations, and abstractions that make
        it easy to go from prototype to production. Think of it as the "standard library" for AI agent development.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🎯 Why LangChain?</h3>
        <p className="text-foreground/80 mb-4">
          LangChain was created to solve a fundamental problem: building LLM applications requires integrating
          many different components (models, databases, APIs, tools), and doing this from scratch is complex and
          time-consuming. LangChain provides battle-tested abstractions and integrations.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-background/50 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">❌ Without LangChain</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Write custom code for each LLM provider</li>
              <li>• Build vector database integrations from scratch</li>
              <li>• Manually manage prompts and context</li>
              <li>• Handle streaming, retries, errors yourself</li>
              <li>• No standardized way to chain operations</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
            <h4 className="font-semibold text-foreground mb-2">✅ With LangChain</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Unified interface for 100+ LLM providers</li>
              <li>• Pre-built integrations with vector databases</li>
              <li>• Prompt templates and management built-in</li>
              <li>• Automatic streaming, retries, fallbacks</li>
              <li>• LCEL for elegant chain composition</li>
            </ul>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Core Components</h3>
        <div className="space-y-3">
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-3xl">🤖</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Models & LLMs</h4>
                <p className="text-sm text-foreground/70">
                  Unified interface for OpenAI, Anthropic, Google, Cohere, open-source models, and more.
                  Switch providers with a single line of code change.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-3xl">📝</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Prompts & Templates</h4>
                <p className="text-sm text-foreground/70">
                  Manage, version, and optimize prompts with templates. Support for few-shot examples,
                  dynamic variables, and prompt composition.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-3xl">🗄️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Vector Stores & Retrievers</h4>
                <p className="text-sm text-foreground/70">
                  Integrations with 50+ vector databases (Chroma, Pinecone, FAISS, Weaviate) for RAG applications.
                  Includes document loaders for PDFs, web pages, databases, etc.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-3xl">🛠️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Tools & Agents</h4>
                <p className="text-sm text-foreground/70">
                  Pre-built tools (web search, calculators, APIs) and agent frameworks implementing ReAct,
                  planning, and other reasoning patterns.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-3xl">💾</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Memory & Conversation</h4>
                <p className="text-sm text-foreground/70">
                  Built-in memory systems for maintaining context across interactions. Support for conversation
                  buffers, summaries, and entity extraction.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-card border border-border">
            <div className="flex gap-3">
              <span className="text-3xl">⛓️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">LCEL (LangChain Expression Language)</h4>
                <p className="text-sm text-foreground/70">
                  Declarative syntax for composing chains using the pipe operator. Enables automatic
                  parallelism, streaming, and async support.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🌟 Key Strengths</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Massive Ecosystem</strong>
                <p className="text-xs text-foreground/70">Largest community, most integrations, extensive documentation</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Production Ready</strong>
                <p className="text-xs text-foreground/70">Battle-tested by thousands of companies in production</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Rapid Development</strong>
                <p className="text-xs text-foreground/70">Build prototypes in minutes with pre-built components</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Flexibility</strong>
                <p className="text-xs text-foreground/70">Use what you need, ignore the rest. Not opinionated</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">Active Development</strong>
                <p className="text-xs text-foreground/70">Weekly updates with new features and integrations</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <div>
                <strong className="text-sm">LangSmith Integration</strong>
                <p className="text-xs text-foreground/70">Built-in observability, debugging, and monitoring tools</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-5 bg-muted/30 border border-border">
        <h3 className="text-xl font-semibold mb-3">Perfect For:</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">🚀 Quick Prototypes</strong>
            <p className="text-foreground/70 mt-1">
              Need to validate an idea fast? LangChain's pre-built components let you build in hours
            </p>
          </div>
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">🏢 Enterprise RAG</strong>
            <p className="text-foreground/70 mt-1">
              Production-grade RAG systems with advanced retrieval, reranking, and citation
            </p>
          </div>
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">🔧 Custom Agents</strong>
            <p className="text-foreground/70 mt-1">
              Build specialized agents with custom tools and reasoning patterns
            </p>
          </div>
          <div className="p-3 bg-background/80 rounded">
            <strong className="text-foreground">📊 Data Integration</strong>
            <p className="text-foreground/70 mt-1">
              Connect LLMs to databases, APIs, and internal systems easily
            </p>
          </div>
        </div>
      </Card>
    </div>
  ),
  "langchain-lcel": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">LangChain Expression Language (LCEL)</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        <strong>LCEL (LangChain Expression Language)</strong> is a declarative way to compose LangChain components
        into chains using the pipe operator (`|`). It's like Unix pipes for AI - take the output of one component
        and feed it as input to the next. LCEL makes complex workflows readable and provides automatic optimizations.
      </p>

      <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <h3 className="text-xl font-semibold mb-4">🔗 The Pipe Operator Magic</h3>
        <p className="text-sm text-foreground/80 mb-4">
          With LCEL, you compose chains by "piping" components together. Each component in the chain processes
          data and passes it to the next:
        </p>
        <div className="p-4 bg-background/50 rounded-lg font-mono text-sm">
          <p className="text-muted-foreground mb-2"># Traditional way (verbose)</p>
          <p className="text-foreground/70">result = output_parser(model(prompt(input_data)))</p>

          <p className="text-muted-foreground mt-4 mb-2"># LCEL way (elegant)</p>
          <p className="text-primary">chain = prompt | model | output_parser</p>
          <p className="text-foreground/70">result = chain.invoke(input_data)</p>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">🚀 Automatic Superpowers</h3>
        <p className="text-sm text-foreground/80 mb-3">
          When you create a chain with LCEL, you automatically get these capabilities for free:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⚡</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Automatic Parallelism</h4>
                <p className="text-sm text-foreground/70">
                  Independent operations run in parallel automatically. If two parts of your chain don't depend
                  on each other, LCEL executes them simultaneously.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📡</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Built-in Streaming</h4>
                <p className="text-sm text-foreground/70">
                  Stream tokens as they're generated from the LLM. Call `.stream()` instead of `.invoke()`
                  for real-time output - no extra code needed.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔄</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Async Support</h4>
                <p className="text-sm text-foreground/70">
                  Every chain works with async/await. Use `.ainvoke()`, `.astream()`, or `.abatch()` for
                  async operations without changing your chain definition.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📦</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Batch Processing</h4>
                <p className="text-sm text-foreground/70">
                  Process multiple inputs efficiently with `.batch()`. Automatically optimizes for parallel
                  execution and batches API calls when possible.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔍</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">LangSmith Tracing</h4>
                <p className="text-sm text-foreground/70">
                  Automatic logging and tracing for debugging. See exactly what happened at each step,
                  how long it took, and what data was passed.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎯</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Fallbacks & Retries</h4>
                <p className="text-sm text-foreground/70">
                  Add `.with_fallbacks()` or `.with_retry()` to any chain for automatic error handling
                  and resilience.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Basic LCEL Example</h3>
        <CodeEditor
          code={`from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Define components
model = ChatOpenAI(model="gpt-4")
prompt = ChatPromptTemplate.from_template("Tell me a joke about {topic}")
output_parser = StrOutputParser()

# Compose with LCEL - that's it!
chain = prompt | model | output_parser

# Use it
result = chain.invoke({"topic": "AI agents"})
print(result)

# Or stream it
for chunk in chain.stream({"topic": "programming"}):
    print(chunk, end="", flush=True)

# Or run async
import asyncio
result = await chain.ainvoke({"topic": "robots"})`}
          language="python"
          title="lcel-basics.py"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Advanced: Parallel Execution</h3>
        <p className="text-sm text-foreground/80 mb-3">
          When you need to run multiple things in parallel (like querying different sources), LCEL handles it elegantly:
        </p>
        <CodeEditor
          code={`from langchain_core.runnables import RunnableParallel

# Run multiple retrievers in parallel
chain = RunnableParallel({
    "docs": document_retriever,
    "web": web_search_tool,
    "db": database_query
}) | combine_results | model | output_parser

# All three sources are queried simultaneously!
result = chain.invoke({"query": "What are AI agents?"})`}
          language="python"
          title="lcel-parallel.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">Why LCEL Matters</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="flex gap-3">
            <span className="text-green-500">✓</span>
            <p><strong>Readability:</strong> Chains read like a pipeline, easy to understand data flow</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500">✓</span>
            <p><strong>Composition:</strong> Build complex workflows from simple, reusable components</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500">✓</span>
            <p><strong>Optimization:</strong> Automatic parallelism and batching without manual tuning</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500">✓</span>
            <p><strong>Flexibility:</strong> Swap components easily without rewriting entire chains</p>
          </div>
          <div className="flex gap-3">
            <span className="text-green-500">✓</span>
            <p><strong>Production Ready:</strong> Built-in error handling, retries, and observability</p>
          </div>
        </div>
      </Card>
    </div>
  ),
  "langchain-react-agent": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Building a ReAct Agent with LangChain</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        LangChain makes building ReAct agents straightforward with its agent framework and tool decorators.
        You define tools, bind them to an LLM, and let the agent decide when and how to use them.
      </p>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <h3 className="text-xl font-semibold mb-4">🛠️ How LangChain Agents Work</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Define Tools</h4>
              <p className="text-sm text-foreground/70">
                Create functions with the `@tool` decorator. LangChain automatically generates descriptions
                from docstrings that the LLM uses to decide when to call each tool.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Bind Tools to LLM</h4>
              <p className="text-sm text-foreground/70">
                Use `.bind_tools()` to give the LLM access to your tools. The LLM can now choose to call
                tools as needed during its reasoning process.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Create Agent Executor</h4>
              <p className="text-sm text-foreground/70">
                The AgentExecutor manages the ReAct loop: thought → action → observation → repeat until done.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Complete Agent Example</h3>
        <CodeEditor
          code={`from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate

# Step 1: Define tools with clear descriptions
@tool
def multiply(first_int: int, second_int: int) -> int:
    """Multiply two integers together. Use this when you need to multiply numbers."""
    return first_int * second_int

@tool
def add(first_int: int, second_int: int) -> int:
    """Add two integers. Use this when you need to sum numbers."""
    return first_int + second_int

@tool
def web_search(query: str) -> str:
    """Search the web for current information. Use when you need recent data."""
    # In real implementation, call actual search API
    return f"Search results for: {query}"

# Step 2: Create LLM and bind tools
tools = [multiply, add, web_search]
llm = ChatOpenAI(model="gpt-4", temperature=0)

# Step 3: Create prompt template
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant. Use tools when needed to answer questions."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}")
])

# Step 4: Create the agent
agent = create_tool_calling_agent(llm, tools, prompt)

# Step 5: Create executor (handles the ReAct loop)
agent_executor = AgentExecutor(
    agent=agent, 
    tools=tools, 
    verbose=True,
    max_iterations=5
)

# Step 6: Use it!
response = agent_executor.invoke({
    "input": "What is 25 times 4, then add 100?"
})

print(response["output"])
# Agent will:
# Thought: I need to multiply 25 by 4, then add 100
# Action: multiply(25, 4)
# Observation: 100
# Thought: Now I need to add 100
# Action: add(100, 100)
# Observation: 200
# Thought: I have the answer
# Final Answer: 200`}
          language="python"
          title="react-agent-complete.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🎯 Key Components Explained</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">@tool Decorator:</strong> Converts any Python function into a
            tool. The docstring becomes the tool description that helps the LLM decide when to use it.
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">AgentExecutor:</strong> Orchestrates the ReAct loop. It calls
            the agent, executes chosen tools, feeds results back, and repeats until the task is complete.
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">verbose=True:</strong> Shows the agent's thinking process in
            real-time. Great for debugging and understanding decisions.
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">max_iterations:</strong> Safety limit to prevent infinite loops.
            Agent stops after this many reasoning cycles.
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-3">✅ Best Practices</h4>
          <ul className="text-sm text-foreground/70 space-y-2">
            <li>• Write clear, descriptive tool docstrings</li>
            <li>• Use type hints for parameters</li>
            <li>• Set temperature=0 for consistent behavior</li>
            <li>• Always set max_iterations</li>
            <li>• Test tools independently first</li>
          </ul>
        </Card>
        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-3">⚡ Pro Tips</h4>
          <ul className="text-sm text-foreground/70 space-y-2">
            <li>• Use GPT-4 for better reasoning</li>
            <li>• Keep tool names descriptive</li>
            <li>• Handle tool errors gracefully</li>
            <li>• Log agent decisions for analysis</li>
            <li>• Start simple, add complexity gradually</li>
          </ul>
        </Card>
      </div>
    </div>
  ),
  "langchain-rag": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Building a RAG Pipeline with LangChain</h1>

      <p className="text-foreground/80 leading-relaxed text-lg">
        LangChain makes building RAG systems simple with pre-built document loaders, text splitters, and
        retrieval chains. You can build a production-ready RAG pipeline in under 50 lines of code.
      </p>

      <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <h3 className="text-xl font-semibold mb-4">📋 The RAG Pipeline Steps</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-background/50 rounded-lg text-center">
            <div className="text-2xl mb-2">📥</div>
            <h4 className="font-semibold text-sm mb-1">Load & Split</h4>
            <p className="text-xs text-foreground/70">Load docs and split into chunks</p>
          </div>
          <div className="p-3 bg-background/50 rounded-lg text-center">
            <div className="text-2xl mb-2">🔢</div>
            <h4 className="font-semibold text-sm mb-1">Embed & Store</h4>
            <p className="text-xs text-foreground/70">Create vectors and index them</p>
          </div>
          <div className="p-3 bg-background/50 rounded-lg text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h4 className="font-semibold text-sm mb-1">Retrieve & Generate</h4>
            <p className="text-xs text-foreground/70">Find relevant docs and generate answer</p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-3">Complete RAG Implementation</h3>
        <CodeEditor
          code={`from langchain_community.document_loaders import WebBaseLoader, PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

# ========== STEP 1: LOAD DOCUMENTS ==========
# Load from web
web_loader = WebBaseLoader("https://example.com/article")
web_docs = web_loader.load()

# Or load PDFs
pdf_loader = PyPDFLoader("document.pdf")
pdf_docs = pdf_loader.load()

# Combine all documents
all_docs = web_docs + pdf_docs

# ========== STEP 2: SPLIT INTO CHUNKS ==========
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,        # Size of each chunk
    chunk_overlap=200,      # Overlap to maintain context
    separators=["\\n\\n", "\\n", " ", ""]  # Split on paragraphs first
)
splits = text_splitter.split_documents(all_docs)

print(f"Created {len(splits)} chunks")

# ========== STEP 3: CREATE EMBEDDINGS & STORE ==========
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(
    documents=splits,
    embedding=embeddings,
    persist_directory="./chroma_db"  # Save to disk
)

# ========== STEP 4: CREATE RETRIEVER ==========
retriever = vectorstore.as_retriever(
    search_type="similarity",  # or "mmr" for diversity
    search_kwargs={"k": 4}     # Return top 4 chunks
)

# ========== STEP 5: BUILD RAG CHAIN WITH LCEL ==========
# Create prompt template
template = """You are a helpful assistant. Answer the question based on the following context:

Context: {context}

Question: {question}

Answer: """

prompt = ChatPromptTemplate.from_template(template)

# Create the chain
rag_chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | ChatOpenAI(model="gpt-4")
    | StrOutputParser()
)

# ========== STEP 6: USE IT! ==========
response = rag_chain.invoke("What are the main topics discussed?")
print(response)

# Stream for real-time output
for chunk in rag_chain.stream("Explain the key concepts"):
    print(chunk, end="", flush=True)`}
          language="python"
          title="rag-complete.py"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">With Source Citations</h3>
        <p className="text-sm text-foreground/80 mb-3">
          Track which documents were used to generate the answer:
        </p>
        <CodeEditor
          code={`from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain

# Create a chain that includes source documents
stuff_documents_chain = create_stuff_documents_chain(
    ChatOpenAI(model="gpt-4"),
    prompt
)

retrieval_chain = create_retrieval_chain(
    retriever,
    stuff_documents_chain
)

# Now you get both answer and sources!
result = retrieval_chain.invoke({"input": "What is RAG?"})

print("Answer:", result["answer"])
print("\\nSources:")
for doc in result["context"]:
    print(f"- {doc.metadata.get('source', 'Unknown')}")
    print(f"  Preview: {doc.page_content[:200]}...")`}
          language="python"
          title="rag-with-sources.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🎨 Document Loaders Available</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">Web:</strong> WebBaseLoader, SitemapLoader
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">Documents:</strong> PyPDFLoader, Docx2txtLoader
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">Data:</strong> CSVLoader, JSONLoader, SQLLoader
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">Cloud:</strong> S3, GCS, Azure Blob Storage
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">APIs:</strong> GitHub, Notion, Slack, Discord
          </div>
          <div className="p-3 bg-muted/50 rounded">
            <strong className="text-foreground">Email:</strong> Gmail, Outlook loaders
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-3">⚙️ Optimization Tips</h4>
          <ul className="text-sm text-foreground/70 space-y-2">
            <li>• Experiment with chunk sizes (500-1500)</li>
            <li>• Use metadata for filtering</li>
            <li>• Try MMR search for diversity</li>
            <li>• Implement re-ranking for accuracy</li>
            <li>• Cache embeddings to save costs</li>
          </ul>
        </Card>
        <Card className="p-4 bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-3">🚀 Production Checklist</h4>
          <ul className="text-sm text-foreground/70 space-y-2">
            <li>• Persist vector store to disk</li>
            <li>• Add error handling for loaders</li>
            <li>• Monitor embedding costs</li>
            <li>• Implement incremental updates</li>
            <li>• Add relevance score thresholds</li>
          </ul>
        </Card>
      </div>
    </div>
  ),
  "langgraph-intro": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Introduction to LangGraph</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🔄 The Framework for Stateful, Cyclical Agent Workflows
        </p>
        <p className="text-foreground/80">
          LangGraph extends LangChain to build agents and workflows as graphs with cycles, persistence, and explicit state management.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">The Problem with DAGs</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          LangChain's LCEL is fantastic for linear or DAG (Directed Acyclic Graph) workflows where data flows in one direction.
          But real-world AI agents need <strong>loops</strong> — they need to think, act, observe results, and think again.
          This cyclical pattern is impossible in a pure DAG.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-3xl">❌</span>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LCEL Limitations</h3>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• No cycles (DAG only)</li>
                  <li>• Limited state control</li>
                  <li>• Hard to implement ReAct loops</li>
                  <li>• No checkpointing/persistence</li>
                  <li>• Difficult to handle errors</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LangGraph Solutions</h3>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Cyclic graphs with loops</li>
                  <li>• Explicit state management</li>
                  <li>• Built for ReAct pattern</li>
                  <li>• Automatic persistence</li>
                  <li>• Built-in error handling</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Why LangGraph?</h2>

        <div className="space-y-3">
          <Card className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Cyclical Workflows</h4>
                <p className="text-sm text-foreground/70">
                  Build true agent loops where the agent can iterate: think → act → observe → think again
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💾</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">State Persistence</h4>
                <p className="text-sm text-foreground/70">
                  Automatically save state between steps. Resume conversations, implement memory, or rollback to checkpoints
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎛️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Fine-Grained Control</h4>
                <p className="text-sm text-foreground/70">
                  Explicit nodes and edges give you complete control over execution flow, branching, and error handling
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👤</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Human-in-the-Loop</h4>
                <p className="text-sm text-foreground/70">
                  Pause execution at any point for human approval, review, or intervention before continuing
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Production-Ready</h4>
                <p className="text-sm text-foreground/70">
                  Built-in error recovery, streaming support, async execution, and observability with LangSmith
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">📊 When to Use LangGraph vs LangChain</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-semibold">Scenario</th>
                <th className="text-left p-3 font-semibold">Use LangChain (LCEL)</th>
                <th className="text-left p-3 font-semibold">Use LangGraph</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/50">
                <td className="p-3">Simple RAG pipeline</td>
                <td className="p-3 text-green-600">✓ Perfect fit</td>
                <td className="p-3 text-muted-foreground">Overkill</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-3">ReAct agent with loops</td>
                <td className="p-3 text-muted-foreground">Difficult</td>
                <td className="p-3 text-green-600">✓ Ideal</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-3">Multi-agent system</td>
                <td className="p-3 text-muted-foreground">Very hard</td>
                <td className="p-3 text-green-600">✓ Designed for this</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-3">Need state persistence</td>
                <td className="p-3 text-muted-foreground">Manual work</td>
                <td className="p-3 text-green-600">✓ Built-in</td>
              </tr>
              <tr>
                <td className="p-3">Human approval workflows</td>
                <td className="p-3 text-muted-foreground">Complex</td>
                <td className="p-3 text-green-600">✓ Native support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Insight</h4>
            <p className="text-sm text-foreground/80">
              Think of <strong>LangChain as the building blocks</strong> (models, prompts, tools, vector stores) and
              <strong> LangGraph as the orchestration layer</strong> that assembles those blocks into complex, stateful workflows.
              They're complementary — use them together for maximum power! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  "langgraph-primitives": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Core Primitives</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🏗️ The Building Blocks of LangGraph
        </p>
        <p className="text-foreground/80">
          LangGraph is built on three simple but powerful primitives: <strong>State</strong>, <strong>Nodes</strong>, and <strong>Edges</strong>. Understanding these is key to mastering LangGraph!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">1️⃣ State: The Shared Memory</h2>

        <p className="text-foreground/80 leading-relaxed mb-4">
          The <strong>State</strong> is a central object (typically a Python <code>TypedDict</code>) that flows through your graph.
          It's like the "memory" or "context" that gets passed from node to node, accumulating information as the workflow progresses.
        </p>

        <Card className="p-5 bg-card border border-border mb-4">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-lg">📦</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">What is it?</h4>
                <p className="text-foreground/70">
                  A typed dictionary that persists data across nodes. Think of it as the "working memory" of your agent.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">🔄</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">How it works</h4>
                <p className="text-foreground/70">
                  Each node receives the current state, performs operations, and returns updates that get merged back into the state.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">➕</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Reducers</h4>
                <p className="text-foreground/70">
                  Special functions that control how state updates are merged (e.g., <code>operator.add</code> for lists).
                </p>
              </div>
            </div>
          </div>
        </Card>

        <CodeEditor
          code={`from typing import TypedDict, Annotated
import operator

# Define your state schema
class AgentState(TypedDict):
    messages: Annotated[list[str], operator.add]  # Messages accumulate
    count: int                                     # Count gets replaced
    user_name: str                                 # Simple field

# Example state flow:
# Initial:  {"messages": ["Hello"], "count": 0}
# Update 1: {"messages": ["How are you?"]} → Merged: ["Hello", "How are you?"]
# Update 2: {"count": 5} → Merged: count becomes 5`}
          language="python"
          title="state-definition.py"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">2️⃣ Nodes: The Workers</h2>

        <p className="text-foreground/80 leading-relaxed mb-4">
          <strong>Nodes</strong> are the fundamental units of work in your graph. They're just Python functions (or LangChain Runnables)
          that take the current state, do something useful, and return state updates.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🤖</span>
              <h4 className="font-semibold text-foreground mb-2">LLM Nodes</h4>
              <p className="text-xs text-foreground/70">
                Call AI models to generate responses
              </p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🛠️</span>
              <h4 className="font-semibold text-foreground mb-2">Tool Nodes</h4>
              <p className="text-xs text-foreground/70">
                Execute external tools and APIs
              </p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="text-center">
              <span className="text-3xl mb-2 block">⚙️</span>
              <h4 className="font-semibold text-foreground mb-2">Logic Nodes</h4>
              <p className="text-xs text-foreground/70">
                Process data, transform state
              </p>
            </div>
          </Card>
        </div>

        <CodeEditor
          code={`# A node is just a function!
def my_node(state: AgentState) -> dict:
    """Nodes receive state and return updates."""
    
    # Access current state
    messages = state["messages"]
    count = state["count"]
    
    # Do some work
    new_message = f"Processed {count} items"
    
    # Return state updates (will be merged)
    return {
        "messages": [new_message],
        "count": count + 1
    }

# Or use a LangChain Runnable as a node
from langchain_openai import ChatOpenAI

def llm_node(state: AgentState):
    llm = ChatOpenAI()
    response = llm.invoke(state["messages"])
    return {"messages": [response.content]}`}
          language="python"
          title="node-examples.py"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">3️⃣ Edges: The Connections</h2>

        <p className="text-foreground/80 leading-relaxed mb-4">
          <strong>Edges</strong> define how nodes are connected — the control flow of your graph.
          They determine which node runs next after the current one finishes.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Card className="p-5 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">➡️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Standard Edges</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Unconditional connections: Node A <strong>always</strong> goes to Node B
                </p>
                <code className="text-xs bg-muted/50 px-2 py-1 rounded">
                  graph.add_edge("node_a", "node_b")
                </code>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔀</span>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Conditional Edges</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Dynamic routing: Decide next node <strong>based on state</strong>
                </p>
                <code className="text-xs bg-muted/50 px-2 py-1 rounded">
                  graph.add_conditional_edges(...)
                </code>
              </div>
            </div>
          </Card>
        </div>

        <CodeEditor
          code={`from langgraph.graph import StateGraph, END

graph = StateGraph(AgentState)

# Add nodes
graph.add_node("agent", agent_node)
graph.add_node("tool", tool_node)

# Standard edge: tool always goes back to agent
graph.add_edge("tool", "agent")

# Conditional edge: agent decides what's next
def router(state: AgentState) -> str:
    """Decide next node based on state."""
    if state["should_use_tool"]:
        return "tool"
    else:
        return "end"

graph.add_conditional_edges(
    "agent",                    # From this node
    router,                     # Use this function to decide
    {
        "tool": "tool",         # If "tool", go to tool node
        "end": END              # If "end", finish
    }
)

# Set entry point
graph.set_entry_point("agent")`}
          language="python"
          title="edges-example.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🎯 Putting It All Together</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="p-3 bg-muted/30 rounded">
            <strong className="text-foreground">1. Define State:</strong> Create a TypedDict with the data your graph needs to track
          </div>
          <div className="p-3 bg-muted/30 rounded">
            <strong className="text-foreground">2. Create Nodes:</strong> Write functions that process state and return updates
          </div>
          <div className="p-3 bg-muted/30 rounded">
            <strong className="text-foreground">3. Connect with Edges:</strong> Define how nodes flow into each other
          </div>
          <div className="p-3 bg-muted/30 rounded">
            <strong className="text-foreground">4. Compile & Run:</strong> Turn your graph into an executable application
          </div>
        </div>
      </Card>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">✨</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">The Magic</h4>
            <p className="text-sm text-foreground/80">
              These three primitives are deceptively simple, but incredibly powerful. With just <strong>State</strong>,
              <strong>Nodes</strong>, and <strong>Edges</strong>, you can build everything from simple agents to
              complex multi-agent systems with human-in-the-loop workflows! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  "langgraph-react": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Building a Stateful ReAct Agent</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🔁 Building the ReAct Loop with Full Control
        </p>
        <p className="text-foreground/80">
          LangGraph gives you explicit control over every step of the ReAct pattern: Think → Act → Observe → Repeat
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">The Graph Architecture</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Instead of hiding the loop logic (like LangChain's AgentExecutor does), LangGraph makes it explicit.
          You define each step as a node and control the flow with conditional edges.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🤖</span>
              <h4 className="font-semibold text-foreground mb-2">Agent Node</h4>
              <p className="text-xs text-foreground/70">
                LLM decides what to do: use a tool or give final answer
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🛠️</span>
              <h4 className="font-semibold text-foreground mb-2">Tool Node</h4>
              <p className="text-xs text-foreground/70">
                Execute the tool(s) the agent chose
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🔀</span>
              <h4 className="font-semibold text-foreground mb-2">Router</h4>
              <p className="text-xs text-foreground/70">
                Decides: continue to tools or end?
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Complete Implementation</h2>
        <CodeEditor
          code={`from typing import TypedDict, Annotated
import operator
from langchain_core.messages import BaseMessage, HumanMessage, ToolMessage
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END

# Step 1: Define State
class AgentState(TypedDict):
    messages: Annotated[list[BaseMessage], operator.add]

# Step 2: Define Tools
@tool
def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""
    return a * b

@tool
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

tools = [multiply, add]

# Step 3: Create LLM with tool binding
llm = ChatOpenAI(model="gpt-4")
llm_with_tools = llm.bind_tools(tools)

# Step 4: Define Nodes
def agent_node(state: AgentState):
    """Call LLM to decide next action."""
    messages = state["messages"]
    response = llm_with_tools.invoke(messages)
    return {"messages": [response]}

def tool_node(state: AgentState):
    """Execute tools the agent chose."""
    last_message = state["messages"][-1]
    tool_calls = last_message.tool_calls
    
    outputs = []
    for tool_call in tool_calls:
        # Find and execute the tool
        tool_name = tool_call["name"]
        tool = next(t for t in tools if t.name == tool_name)
        result = tool.invoke(tool_call["args"])
        
        # Create tool message
        outputs.append(ToolMessage(
            content=str(result),
            tool_call_id=tool_call["id"]
        ))
    
    return {"messages": outputs}

# Step 5: Define Routing Logic
def should_continue(state: AgentState) -> str:
    """Route to tools or end based on last message."""
    last_message = state["messages"][-1]
    
    # If LLM made tool calls, continue to tool node
    if hasattr(last_message, "tool_calls") and last_message.tool_calls:
        return "continue"
    # Otherwise, end the loop
    return "end"

# Step 6: Build the Graph
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("agent", agent_node)
workflow.add_node("tools", tool_node)

# Set entry point
workflow.set_entry_point("agent")

# Add edges
workflow.add_conditional_edges(
    "agent",
    should_continue,
    {
        "continue": "tools",
        "end": END
    }
)

# Tools always go back to agent for next decision
workflow.add_edge("tools", "agent")

# Step 7: Compile and Use
app = workflow.compile()

# Run the agent
result = app.invoke({
    "messages": [HumanMessage(content="What is 25 * 4, then add 100?")]
})

# Print final answer
print(result["messages"][-1].content)  # Output: 200`}
          language="python"
          title="langgraph-react-agent.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">📊 How the Loop Works</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded border border-blue-500/20">
            <strong className="text-foreground">Step 1: Agent Thinks</strong>
            <p className="mt-1">User asks: "What is 25 * 4, then add 100?"</p>
            <p className="mt-1">→ Agent decides to call <code>multiply(25, 4)</code></p>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded border border-green-500/20">
            <strong className="text-foreground">Step 2: Tool Executes</strong>
            <p className="mt-1">Tool node runs <code>multiply(25, 4)</code></p>
            <p className="mt-1">→ Returns: 100</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded border border-purple-500/20">
            <strong className="text-foreground">Step 3: Back to Agent</strong>
            <p className="mt-1">Agent sees result: 100</p>
            <p className="mt-1">→ Decides to call <code>add(100, 100)</code></p>
          </div>

          <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded border border-orange-500/20">
            <strong className="text-foreground">Step 4: Tool Executes Again</strong>
            <p className="mt-1">Tool node runs <code>add(100, 100)</code></p>
            <p className="mt-1">→ Returns: 200</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded border border-red-500/20">
            <strong className="text-foreground">Step 5: Final Answer</strong>
            <p className="mt-1">Agent has the answer</p>
            <p className="mt-1">→ Returns: "The answer is 200" (END)</p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Benefits of Explicit Control</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>💾</span> State Persistence
            </h4>
            <p className="text-sm text-foreground/70">
              Add a checkpointer to save state after every step. Resume conversations, rollback to any point, or implement human-in-the-loop approval.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🔍</span> Observability
            </h4>
            <p className="text-sm text-foreground/70">
              Every node execution is explicit. Add logging, monitoring, or LangSmith tracing to see exactly what your agent is doing.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🛡️</span> Error Handling
            </h4>
            <p className="text-sm text-foreground/70">
              Wrap nodes in try-catch, implement retry logic, or route to error-handling nodes. Full control over failure modes.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>⚡</span> Custom Logic
            </h4>
            <p className="text-sm text-foreground/70">
              Add custom nodes for anything: validation, data transformation, external API calls, or multi-step reasoning chains.
            </p>
          </Card>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Pro Tip: Streaming</h4>
            <p className="text-sm text-foreground/80 mb-2">
              LangGraph supports streaming! Use <code>app.stream()</code> to get real-time updates as the agent thinks and acts:
            </p>
            <code className="text-xs bg-muted/50 px-3 py-2 rounded block">
              for chunk in app.stream(input): print(chunk)
            </code>
          </div>
        </div>
      </div>
    </div>
  ),
  "langgraph-multi": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Multi-Agent Supervisor System</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          👥 Orchestrating Teams of Specialized AI Agents
        </p>
        <p className="text-foreground/80">
          LangGraph excels at coordinating multiple agents working together, each with their own expertise and tools.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">The Supervisor Pattern</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          The <strong>supervisor pattern</strong> is like a project manager coordinating a team. One "supervisor" agent
          analyzes the task and delegates work to specialized "worker" agents. Each worker does their job and reports back,
          and the supervisor decides what happens next.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="text-center">
              <span className="text-4xl mb-2 block">👔</span>
              <h4 className="font-semibold text-foreground mb-2">Supervisor</h4>
              <p className="text-xs text-foreground/70">
                Smart router that analyzes tasks and delegates to workers
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🔍</span>
              <h4 className="font-semibold text-foreground mb-2">Researcher</h4>
              <p className="text-xs text-foreground/70">
                Searches the web, gathers information, analyzes data
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="text-center">
              <span className="text-4xl mb-2 block">💻</span>
              <h4 className="font-semibold text-foreground mb-2">Coder</h4>
              <p className="text-xs text-foreground/70">
                Writes code, runs scripts, debugs programs
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🏗️ Architecture Components</h2>

        <div className="space-y-3">
          <Card className="p-4 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">State</h4>
                <p className="text-sm text-foreground/70">
                  Shared memory containing messages, current worker, and task context
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👷</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Worker Nodes</h4>
                <p className="text-sm text-foreground/70">
                  Each specialized agent is a node with its own tools and instructions
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Supervisor Node</h4>
                <p className="text-sm text-foreground/70">
                  LLM-powered router that decides which worker should act next (or finish)
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔀</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Routing Logic</h4>
                <p className="text-sm text-foreground/70">
                  Conditional edges route to the worker chosen by the supervisor
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Complete Multi-Agent Implementation</h2>
        <CodeEditor
          code={`from typing import TypedDict, Annotated, Literal
import operator
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langgraph.graph import StateGraph, END

# Step 1: Define State
class AgentState(TypedDict):
    messages: Annotated[list, operator.add]
    next: str  # Which agent to call next

# Step 2: Define Tools for Each Worker
@tool
def web_search(query: str) -> str:
    """Search the web for information."""
    return f"Search results for: {query}"

@tool
def run_code(code: str) -> str:
    """Execute Python code."""
    try:
        result = eval(code)
        return f"Code output: {result}"
    except Exception as e:
        return f"Error: {str(e)}"

# Step 3: Create Worker Agents
researcher_tools = [web_search]
coder_tools = [run_code]

researcher_llm = ChatOpenAI(model="gpt-4").bind_tools(researcher_tools)
coder_llm = ChatOpenAI(model="gpt-4").bind_tools(coder_tools)

def researcher_node(state: AgentState):
    """Research agent node."""
    messages = state["messages"]
    system_msg = SystemMessage(content="You are a research assistant. Search for information.")
    response = researcher_llm.invoke([system_msg] + messages)
    return {"messages": [response]}

def coder_node(state: AgentState):
    """Coder agent node."""
    messages = state["messages"]
    system_msg = SystemMessage(content="You are a coding assistant. Write and run code.")
    response = coder_llm.invoke([system_msg] + messages)
    return {"messages": [response]}

# Step 4: Create Supervisor
supervisor_prompt = """You are a supervisor managing a team of workers:
- researcher: Can search the web for information
- coder: Can write and execute Python code

Given the user request, decide which worker should act next.
Respond with JSON: {"next": "researcher"} or {"next": "coder"} or {"next": "FINISH"}"""

supervisor_llm = ChatOpenAI(model="gpt-4", temperature=0)

def supervisor_node(state: AgentState):
    """Supervisor decides which worker goes next."""
    messages = state["messages"]
    response = supervisor_llm.invoke([
        SystemMessage(content=supervisor_prompt),
        *messages
    ])
    
    # Parse supervisor decision
    content = response.content
    if "researcher" in content.lower():
        next_agent = "researcher"
    elif "coder" in content.lower():
        next_agent = "coder"
    else:
        next_agent = "FINISH"
    
    return {"next": next_agent}

# Step 5: Build the Graph
workflow = StateGraph(AgentState)

# Add all nodes
workflow.add_node("supervisor", supervisor_node)
workflow.add_node("researcher", researcher_node)
workflow.add_node("coder", coder_node)

# Entry point is supervisor
workflow.set_entry_point("supervisor")

# Define routing logic
def route_after_supervisor(state: AgentState) -> str:
    """Route based on supervisor decision."""
    return state["next"]

# Supervisor routes to workers or END
workflow.add_conditional_edges(
    "supervisor",
    route_after_supervisor,
    {
        "researcher": "researcher",
        "coder": "coder",
        "FINISH": END
    }
)

# Workers always go back to supervisor
workflow.add_edge("researcher", "supervisor")
workflow.add_edge("coder", "supervisor")

# Compile
app = workflow.compile()

# Use it!
result = app.invoke({
    "messages": [
        HumanMessage(content="Find the population of Tokyo, then calculate 10% of it")
    ],
    "next": ""
})

print(result["messages"][-1].content)`}
          language="python"
          title="multi-agent-supervisor.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">📊 How It Works</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded border border-purple-500/20">
            <strong className="text-foreground">1. User Request</strong>
            <p className="mt-1">"Find the population of Tokyo, then calculate 10% of it"</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded border border-blue-500/20">
            <strong className="text-foreground">2. Supervisor Analyzes</strong>
            <p className="mt-1">Supervisor: "This needs research first" → Routes to <code>researcher</code></p>
          </div>

          <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded border border-cyan-500/20">
            <strong className="text-foreground">3. Researcher Works</strong>
            <p className="mt-1">Researcher searches web → Finds: "Tokyo population: ~14 million"</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded border border-green-500/20">
            <strong className="text-foreground">4. Back to Supervisor</strong>
            <p className="mt-1">Supervisor: "Now we need calculation" → Routes to <code>coder</code></p>
          </div>

          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded border border-emerald-500/20">
            <strong className="text-foreground">5. Coder Works</strong>
            <p className="mt-1">Coder runs: <code>14000000 * 0.1</code> → Result: 1,400,000</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded border border-orange-500/20">
            <strong className="text-foreground">6. Final Decision</strong>
            <p className="mt-1">Supervisor: "Task complete!" → Routes to <code>FINISH</code></p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Multi-Agent Patterns</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>👔</span> Supervisor (Hierarchical)
            </h4>
            <p className="text-sm text-foreground/70 mb-2">
              One supervisor routes to N workers
            </p>
            <div className="text-xs text-foreground/60">
              ✅ Best for: Complex tasks needing different expertise<br />
              ✅ Pro: Clear delegation, easy to add workers<br />
              ⚠️ Con: Supervisor is a bottleneck
            </div>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🔄</span> Sequential (Pipeline)
            </h4>
            <p className="text-sm text-foreground/70 mb-2">
              Agents work in fixed order: A → B → C
            </p>
            <div className="text-xs text-foreground/60">
              ✅ Best for: Predictable workflows<br />
              ✅ Pro: Simple, fast, deterministic<br />
              ⚠️ Con: Not adaptive
            </div>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🤝</span> Collaborative (Peer-to-Peer)
            </h4>
            <p className="text-sm text-foreground/70 mb-2">
              Agents communicate directly with each other
            </p>
            <div className="text-xs text-foreground/60">
              ✅ Best for: Brainstorming, debate, consensus<br />
              ✅ Pro: More autonomous, creative<br />
              ⚠️ Con: Can be chaotic, needs good prompting
            </div>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>⚡</span> Parallel (Map-Reduce)
            </h4>
            <p className="text-sm text-foreground/70 mb-2">
              Multiple agents work simultaneously, results merged
            </p>
            <div className="text-xs text-foreground/60">
              ✅ Best for: Large-scale tasks (analyze 100 docs)<br />
              ✅ Pro: Fast, scalable<br />
              ⚠️ Con: Requires merge logic
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🚀</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Why Multi-Agent?</h4>
            <p className="text-sm text-foreground/80 mb-2">
              Multi-agent systems shine when:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Specialization:</strong> Each agent masters one domain (research, coding, analysis)</li>
              <li>• <strong>Parallelization:</strong> Multiple agents work simultaneously</li>
              <li>• <strong>Modularity:</strong> Easy to add/remove/replace agents</li>
              <li>• <strong>Scalability:</strong> Handle complex tasks by breaking them down</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Pro Tips</h4>
            <div className="text-sm text-foreground/80 space-y-2">
              <div>
                <strong>1. Clear Roles:</strong> Give each agent a crystal-clear role and expertise in the system prompt
              </div>
              <div>
                <strong>2. Supervisor Prompting:</strong> Include worker descriptions in supervisor prompt so it knows who to call
              </div>
              <div>
                <strong>3. Max Iterations:</strong> Set a limit to prevent infinite loops: <code>recursion_limit=20</code>
              </div>
              <div>
                <strong>4. Streaming:</strong> Use <code>app.stream()</code> to see each agent's thinking in real-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  "crewai-intro": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Introduction to CrewAI</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🎭 Building AI Teams That Work Like Humans
        </p>
        <p className="text-foreground/80">
          CrewAI is a high-level framework for orchestrating role-playing AI agents that collaborate like a real team — with roles, goals, and personalities!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">What Makes CrewAI Different?</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          While LangGraph gives you low-level control over agent workflows, CrewAI takes a <strong>high-level, opinionated approach</strong>.
          Instead of managing state and edges manually, you define agents with <strong>roles and personalities</strong>, assign them tasks,
          and let CrewAI handle the orchestration automatically.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="font-semibold text-foreground mb-2">LangGraph</h3>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Explicit state management</li>
                  <li>• Manual node/edge definition</li>
                  <li>• Full control over flow</li>
                  <li>• More code, more flexibility</li>
                  <li>✅ Best for: Custom workflows</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎭</span>
              <div>
                <h3 className="font-semibold text-foreground mb-2">CrewAI</h3>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Role-based abstractions</li>
                  <li>• Automatic orchestration</li>
                  <li>• Team-like collaboration</li>
                  <li>• Less code, faster dev</li>
                  <li>✅ Best for: Team simulations</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🏗️ Core Abstractions</h2>

        <div className="space-y-3">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl">👤</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">Agents</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  AI team members with <strong>roles, goals, and backstories</strong>. Each agent has a distinct personality and expertise.
                </p>
                <div className="grid md:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Role:</strong>
                    <p className="text-foreground/60">Job title (e.g., "Senior Researcher")</p>
                  </div>
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Goal:</strong>
                    <p className="text-foreground/60">What they're trying to achieve</p>
                  </div>
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Backstory:</strong>
                    <p className="text-foreground/60">Context that shapes behavior</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📋</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">Tasks</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Specific units of work assigned to agents. Each task has a clear <strong>description</strong> and <strong>expected output</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Description:</strong>
                    <p className="text-foreground/60">What needs to be done</p>
                  </div>
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Expected Output:</strong>
                    <p className="text-foreground/60">Success criteria & format</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🛠️</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">Tools</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  External capabilities agents can use: web search, file I/O, APIs, databases, custom functions.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-background/50 rounded">SerperDevTool (search)</span>
                  <span className="px-2 py-1 bg-background/50 rounded">FileReadTool</span>
                  <span className="px-2 py-1 bg-background/50 rounded">WebsiteSearchTool</span>
                  <span className="px-2 py-1 bg-background/50 rounded">Custom tools</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🚢</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">Crew</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  The team itself! A crew combines agents and tasks with a <strong>process</strong> (sequential, hierarchical, or parallel).
                </p>
                <div className="grid md:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Sequential:</strong>
                    <p className="text-foreground/60">Tasks run one by one</p>
                  </div>
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Hierarchical:</strong>
                    <p className="text-foreground/60">Manager delegates</p>
                  </div>
                  <div className="p-2 bg-background/50 rounded">
                    <strong className="text-foreground">Parallel:</strong>
                    <p className="text-foreground/60">Tasks run together</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">✨ Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🎭</span> Role-Playing Agents
            </h4>
            <p className="text-sm text-foreground/70">
              Agents adopt personas with backstories, making their responses more contextual and realistic
            </p>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🔄</span> Automatic Collaboration
            </h4>
            <p className="text-sm text-foreground/70">
              Agents automatically share context and hand off work — no manual message passing needed
            </p>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>📝</span> Task Dependencies
            </h4>
            <p className="text-sm text-foreground/70">
              Later tasks automatically get outputs from earlier ones as context
            </p>
          </Card>

          <Card className="p-4 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🚀</span> Quick Prototyping
            </h4>
            <p className="text-sm text-foreground/70">
              Build multi-agent systems in minutes instead of hours with minimal boilerplate
            </p>
          </Card>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">The CrewAI Philosophy</h4>
            <p className="text-sm text-foreground/80">
              CrewAI believes that <strong>agents should work like people</strong>. Instead of nodes and edges,
              you think in terms of <strong>team members, roles, and tasks</strong>. This makes it incredibly
              intuitive for building collaborative AI systems that mirror real-world teams! 🎯
            </p>
          </div>
        </div>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🎯 When to Use CrewAI</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-green-600 mb-2">✅ Great For:</h4>
            <ul className="space-y-1 text-foreground/70">
              <li>• Content creation workflows</li>
              <li>• Research and analysis teams</li>
              <li>• Simulating human teamwork</li>
              <li>• Rapid prototyping</li>
              <li>• Business process automation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">⚠️ Consider LangGraph If:</h4>
            <ul className="space-y-1 text-foreground/70">
              <li>• Need fine-grained control</li>
              <li>• Complex conditional logic</li>
              <li>• Custom state management</li>
              <li>• Performance-critical loops</li>
              <li>• Non-team-like workflows</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  ),
  "crewai-philosophy": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">The CrewAI Philosophy</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🎯 "What" Over "How" — Focus on Intent, Not Implementation
        </p>
        <p className="text-foreground/80">
          CrewAI's philosophy: Define <strong>what</strong> your agents should do, not <strong>how</strong> they should do it. The framework handles orchestration automatically.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Abstraction vs Control</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          CrewAI deliberately abstracts away low-level details like state management, message passing, and control flow.
          This trade-off gives you <strong>speed and simplicity</strong> at the cost of <strong>fine-grained control</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>✅</span> What CrewAI Handles For You
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span><strong>State Management:</strong> Automatic context sharing between agents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span><strong>Message Passing:</strong> Agents communicate without manual wiring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span><strong>Task Orchestration:</strong> Sequential/hierarchical execution built-in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span><strong>Error Handling:</strong> Retry logic and graceful degradation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span><strong>LLM Integration:</strong> Works with any LLM (OpenAI, Anthropic, local)</span>
              </li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>📝</span> What You Define
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span><strong>Agent Roles:</strong> Who they are (job title, personality)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span><strong>Agent Goals:</strong> What they're trying to achieve</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span><strong>Tasks:</strong> What needs to be done and in what order</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span><strong>Tools:</strong> What capabilities agents have access to</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-0.5">→</span>
                <span><strong>Process:</strong> Sequential, hierarchical, or parallel</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎭 The "Team Metaphor"</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          CrewAI's core innovation is treating AI agents like <strong>human team members</strong>. Just like hiring a team,
          you define roles, set goals, assign tasks, and let them collaborate naturally.
        </p>

        <Card className="p-6 bg-card border border-border">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-center mb-3">
                <span className="text-4xl">👨‍💼</span>
                <h4 className="font-semibold text-foreground mt-2">Human Team</h4>
              </div>
              <ul className="text-foreground/70 space-y-1.5">
                <li>• Hire people with skills</li>
                <li>• Assign clear roles</li>
                <li>• Set goals & KPIs</li>
                <li>• Define tasks & deadlines</li>
                <li>• They collaborate naturally</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-3xl text-primary">→</span>
            </div>

            <div>
              <div className="text-center mb-3">
                <span className="text-4xl">🤖</span>
                <h4 className="font-semibold text-foreground mt-2">CrewAI Team</h4>
              </div>
              <ul className="text-foreground/70 space-y-1.5">
                <li>• Create agents with tools</li>
                <li>• Assign clear roles</li>
                <li>• Set goals & backstories</li>
                <li>• Define tasks & outputs</li>
                <li>• They collaborate automatically</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🚀 Key Benefits</h2>

        <div className="space-y-3">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Rapid Development</h4>
                <p className="text-sm text-foreground/70">
                  Build a multi-agent system in <strong>50 lines of code</strong> instead of 500. No need to manage state, edges, or message passing.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Intuitive Mental Model</h4>
                <p className="text-sm text-foreground/70">
                  Think in terms of <strong>roles and responsibilities</strong> (like a real team), not nodes and edges. More natural for business workflows.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Focus on Business Logic</h4>
                <p className="text-sm text-foreground/70">
                  Spend time defining <strong>what agents should accomplish</strong>, not debugging state machines and control flow.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Less Boilerplate</h4>
                <p className="text-sm text-foreground/70">
                  No repetitive code for message passing, state updates, or error handling. CrewAI handles it automatically.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Natural Collaboration</h4>
                <p className="text-sm text-foreground/70">
                  Agents automatically <strong>share context and delegate</strong> work. Task outputs flow to the next agent seamlessly.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">⚖️ The Trade-Off</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-600 mb-3">💚 What You Gain</h4>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>✓ <strong>Speed:</strong> 10x faster development</li>
              <li>✓ <strong>Simplicity:</strong> Less code, fewer bugs</li>
              <li>✓ <strong>Maintainability:</strong> Easy to understand and modify</li>
              <li>✓ <strong>Onboarding:</strong> New devs ramp up quickly</li>
              <li>✓ <strong>Prototyping:</strong> Test ideas in minutes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">⚠️ What You Trade</h4>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>• <strong>Control:</strong> Can't customize every detail</li>
              <li>• <strong>Flexibility:</strong> Limited to CrewAI's patterns</li>
              <li>• <strong>Debugging:</strong> Some magic is opaque</li>
              <li>• <strong>Performance:</strong> May not be optimal for all cases</li>
              <li>• <strong>Complex Flows:</strong> Hard to do non-linear workflows</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">The Bottom Line</h4>
            <p className="text-sm text-foreground/80">
              CrewAI is perfect when <strong>speed and simplicity</strong> matter more than <strong>control</strong>.
              For 80% of use cases (content creation, research, business automation), CrewAI's abstractions are exactly
              what you need. For the other 20% (custom control flow, performance-critical loops), reach for LangGraph.
              <strong>Choose the right tool for the job!</strong> 🎯
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  "crewai-example": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Research and Reporting Crew</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🎯 Building a Two-Agent Content Team
        </p>
        <p className="text-foreground/80">
          Let's build a crew with a <strong>Researcher</strong> who finds information and a <strong>Writer</strong> who creates content — just like a real content team!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">The Scenario</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          You want to create blog posts on various topics. Instead of doing it yourself, you'll create an AI team:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="text-center mb-3">
              <span className="text-4xl">🔍</span>
              <h3 className="font-semibold text-foreground mt-2">Researcher</h3>
            </div>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Searches the web for information</li>
              <li>• Analyzes and synthesizes findings</li>
              <li>• Creates a research report</li>
              <li>• Hands off to Writer</li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="text-center mb-3">
              <span className="text-4xl">✍️</span>
              <h3 className="font-semibold text-foreground mt-2">Writer</h3>
            </div>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Receives research findings</li>
              <li>• Crafts engaging blog post</li>
              <li>• Formats in markdown</li>
              <li>• Delivers final content</li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Complete Implementation</h2>
        <CodeEditor
          code={`from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool

# Step 1: Define the Researcher Agent
researcher = Agent(
    role='Senior AI Research Analyst',
    goal='Uncover cutting-edge developments in {topic}',
    backstory="""You are an expert research analyst with 10+ years of experience 
    in technology and AI. You have a talent for finding the most relevant and 
    accurate information from across the web. You're known for your thorough 
    analysis and ability to distill complex topics into clear insights.""",
    tools=[SerperDevTool()],  # Web search tool
    verbose=True,
    allow_delegation=False
)

# Step 2: Define the Writer Agent
writer = Agent(
    role='Tech Content Strategist',
    goal='Craft compelling, engaging content about {topic}',
    backstory="""You are a renowned tech writer with a gift for making complex 
    topics accessible and interesting. Your articles are known for their clarity, 
    engaging style, and ability to hook readers from the first sentence. You've 
    written for major tech publications and have a loyal following.""",
    verbose=True,
    allow_delegation=False
)

# Step 3: Define Research Task
research_task = Task(
    description="""Conduct comprehensive research on {topic}. 
    Your analysis should include:
    - Latest developments and trends
    - Key players and technologies
    - Real-world applications
    - Future outlook and potential impact
    
    Provide a detailed research report with 5-7 key findings.""",
    expected_output='Detailed research report with bullet points',
    agent=researcher
)

# Step 4: Define Writing Task
write_task = Task(
    description="""Using the research provided, write an engaging 600-word 
    blog post about {topic}. The post should:
    - Start with a hook that grabs attention
    - Explain the topic clearly for a general tech audience
    - Include the most interesting findings from the research
    - End with implications for the future
    
    Format in markdown with headers and emphasis.""",
    expected_output='Well-structured blog post in markdown format',
    agent=writer
)

# Step 5: Assemble the Crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task],
    process=Process.sequential,  # Tasks run one after another
    verbose=2  # Show detailed logs
)

# Step 6: Kick Off the Crew
result = crew.kickoff(inputs={
    'topic': 'Multi-Agent AI Systems'
})

# Step 7: Get the Final Output
print("="*50)
print("FINAL BLOG POST:")
print("="*50)
print(result)`}
          language="python"
          title="crewai-research-crew.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">📊 How It Works</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded border border-blue-500/20">
            <strong className="text-foreground">Step 1: Researcher Investigates</strong>
            <p className="mt-1">Researcher uses SerperDevTool to search the web → Finds articles, papers, news</p>
            <p className="mt-1 text-xs text-foreground/60">Output: Research report with 5-7 key findings</p>
          </div>

          <div className="flex justify-center">
            <span className="text-2xl text-primary">↓</span>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded border border-green-500/20">
            <strong className="text-foreground">Step 2: Writer Creates Content</strong>
            <p className="mt-1">Writer receives research → Crafts engaging blog post → Formats in markdown</p>
            <p className="mt-1 text-xs text-foreground/60">Output: 600-word blog post ready to publish</p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Key CrewAI Features in Action</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🎭</span> Role-Playing
            </h4>
            <p className="text-sm text-foreground/70">
              <strong>Backstories</strong> give agents context and personality. They act like real experts, not generic assistants.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🔄</span> Automatic Handoff
            </h4>
            <p className="text-sm text-foreground/70">
              Research output automatically becomes <strong>context</strong> for the writer. No manual wiring needed!
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🛠️</span> Tool Integration
            </h4>
            <p className="text-sm text-foreground/70">
              <strong>SerperDevTool</strong> gives the researcher web search capability. Easy to add more tools!
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>📝</span> Clear Expectations
            </h4>
            <p className="text-sm text-foreground/70">
              <strong>Expected outputs</strong> guide agents on what to produce. Makes results more predictable.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🚀 Extending the Crew</h2>
        <p className="text-foreground/80 mb-4">
          Want to make it more powerful? Here are easy additions:
        </p>

        <div className="space-y-3">
          <Card className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <h4 className="font-semibold text-foreground mb-2">Add an Editor Agent</h4>
            <p className="text-sm text-foreground/70 mb-2">
              Review and improve the blog post for grammar, style, and flow
            </p>
            <code className="text-xs bg-muted/50 px-2 py-1 rounded">
              editor = Agent(role='Senior Editor', goal='Polish content', ...)
            </code>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <h4 className="font-semibold text-foreground mb-2">Add More Tools</h4>
            <p className="text-sm text-foreground/70 mb-2">
              FileReadTool, WebsiteSearchTool, YouTubeSearchTool, custom tools
            </p>
            <code className="text-xs bg-muted/50 px-2 py-1 rounded">
              tools=[SerperDevTool(), FileReadTool(), custom_tool]
            </code>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/30">
            <h4 className="font-semibold text-foreground mb-2">Change Process Type</h4>
            <p className="text-sm text-foreground/70 mb-2">
              Hierarchical: manager delegates | Parallel: tasks run simultaneously
            </p>
            <code className="text-xs bg-muted/50 px-2 py-1 rounded">
              process=Process.hierarchical  # or Process.parallel
            </code>
          </Card>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Why This Is Powerful</h4>
            <p className="text-sm text-foreground/80 mb-2">
              Notice how <strong>simple</strong> this is? In ~50 lines, you built a two-agent system that:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>✓ Searches the web for information</li>
              <li>✓ Analyzes and synthesizes findings</li>
              <li>✓ Writes engaging content</li>
              <li>✓ Handles context passing automatically</li>
              <li>✓ Can be extended with more agents/tools</li>
            </ul>
            <p className="text-sm text-foreground/80 mt-3">
              Compare this to building the same thing with raw LangChain or LangGraph — you'd need 10x more code!
              <strong>This is the power of CrewAI's abstractions.</strong> 🚀
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Best Practices</h4>
            <div className="text-sm text-foreground/80 space-y-2">
              <div>
                <strong>1. Rich Backstories:</strong> Give agents detailed personas — it dramatically improves output quality
              </div>
              <div>
                <strong>2. Clear Expected Outputs:</strong> Be specific about format and content you want
              </div>
              <div>
                <strong>3. Right Tools:</strong> Only give agents tools they actually need for their role
              </div>
              <div>
                <strong>4. Test Iteratively:</strong> Start with verbose=True, then refine based on logs
              </div>
              <div>
                <strong>5. Template Variables:</strong> Use {'{'}topic{'}'} for reusability across different inputs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  "autogen-intro": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Introduction to AutoGen</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          💬 Conversation as Computation
        </p>
        <p className="text-foreground/80">
          AutoGen by Microsoft treats agent interaction as <strong>conversations</strong> — agents talk, code, execute, and iterate until the problem is solved!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">The Microsoft Research Approach</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          AutoGen emerged from Microsoft Research with a unique philosophy: <strong>complex tasks are best solved through conversation</strong>.
          Instead of rigid workflows or role-based teams, AutoGen lets agents <strong>chat naturally</strong> to arrive at solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🎯</span>
              <h3 className="font-semibold text-foreground mb-2">LangGraph</h3>
              <p className="text-xs text-foreground/70">
                Explicit graphs with nodes & edges
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🎭</span>
              <h3 className="font-semibold text-foreground mb-2">CrewAI</h3>
              <p className="text-xs text-foreground/70">
                Team roles with tasks
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="text-center">
              <span className="text-4xl mb-2 block">💬</span>
              <h3 className="font-semibold text-foreground mb-2">AutoGen</h3>
              <p className="text-xs text-foreground/70">
                Natural conversations
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 The AutoGen Pattern</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          AutoGen excels at <strong>code-centric workflows</strong>. The typical pattern: one agent writes code, another executes it,
          they discuss results, refine, and iterate until success. Perfect for data analysis, automation, and problem-solving!
        </p>

        <Card className="p-6 bg-card border border-border">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">
                👨‍💻
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">AssistantAgent</h4>
                <p className="text-sm text-foreground/70">
                  LLM-powered agent that writes code, plans strategies, and reasons about problems
                </p>
              </div>
            </div>

            <div className="flex justify-center py-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">↓</span>
                <span className="text-sm text-foreground/70">writes code</span>
                <span className="text-2xl">↓</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-xl">
                ⚙️
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">UserProxyAgent</h4>
                <p className="text-sm text-foreground/70">
                  Executes code in a safe environment, reports results, errors, or success back
                </p>
              </div>
            </div>

            <div className="flex justify-center py-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">↑</span>
                <span className="text-sm text-foreground/70">reports results</span>
                <span className="text-2xl">↑</span>
              </div>
            </div>

            <div className="text-center text-sm text-foreground/60 italic">
              Repeat until problem solved or max iterations reached
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">✨ Unique Features</h2>

        <div className="space-y-3">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Conversation-Driven</h4>
                <p className="text-sm text-foreground/70">
                  Agents literally <strong>chat</strong> with each other. No explicit workflow — the conversation IS the workflow.
                  Natural for exploratory tasks where the path isn't clear upfront.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💻</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Code Generation & Execution</h4>
                <p className="text-sm text-foreground/70">
                  <strong>Built-in code execution</strong> in sandboxed environments (Docker or local). Agents can write, run, debug,
                  and iterate on code automatically.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔁</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Trial-and-Error Learning</h4>
                <p className="text-sm text-foreground/70">
                  Agents try solutions, see errors, adjust, and try again. This <strong>iterative debugging loop</strong> mimics how
                  human developers work.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Multi-Agent Conversations</h4>
                <p className="text-sm text-foreground/70">
                  Not limited to 2 agents. Build <strong>group chats</strong> with multiple agents, each with different expertise,
                  collaborating on complex problems.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Human-in-the-Loop</h4>
                <p className="text-sm text-foreground/70">
                  Optional human input during conversations. Pause for approval, guidance, or course correction at any point.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">🎯 When AutoGen Shines</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-green-600 mb-3">✅ Perfect For:</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>• <strong>Data Analysis:</strong> "Analyze this CSV and create visualizations"</li>
              <li>• <strong>Code Generation:</strong> "Build a web scraper for X"</li>
              <li>• <strong>Automation:</strong> "Automate this repetitive task"</li>
              <li>• <strong>Research:</strong> "Explore this dataset and find patterns"</li>
              <li>• <strong>Problem Solving:</strong> Tasks requiring trial & error</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">⚠️ Less Ideal For:</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>• <strong>Non-code workflows:</strong> Content creation, writing</li>
              <li>• <strong>Predictable flows:</strong> Use LangChain LCEL instead</li>
              <li>• <strong>Heavy state management:</strong> Use LangGraph</li>
              <li>• <strong>Team simulations:</strong> Use CrewAI</li>
              <li>• <strong>Simple RAG:</strong> Overkill for basic retrieval</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">The AutoGen Philosophy</h4>
            <p className="text-sm text-foreground/80">
              AutoGen believes that <strong>conversation is the most natural interface</strong> for agents to collaborate.
              Instead of predefined workflows, let agents <strong>talk it out</strong> — just like how humans solve complex
              problems by discussing, trying things, and learning from mistakes. This makes AutoGen incredibly powerful for
              <strong>exploratory, code-heavy tasks</strong> where the solution path isn't clear upfront! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  "autogen-concepts": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Core Concepts</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🧩 The Building Blocks of AutoGen
        </p>
        <p className="text-foreground/80">
          AutoGen has a simple but powerful set of components that enable complex conversational workflows.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎭 Agent Types</h2>

        <div className="space-y-4">
          <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">👨‍💻</span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">AssistantAgent</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  The "thinker" — an LLM-powered agent that can reason, plan, and generate code.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Capabilities:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• Write Python code</li>
                      <li>• Reason about problems</li>
                      <li>• Plan multi-step solutions</li>
                      <li>• Generate explanations</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Configuration:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• LLM model (GPT-4, etc.)</li>
                      <li>• System message/prompt</li>
                      <li>• Temperature & max tokens</li>
                      <li>• Function calling enabled</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚙️</span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">UserProxyAgent</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  The "doer" — executes code written by AssistantAgent and reports results back.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Capabilities:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• Execute Python code safely</li>
                      <li>• Report success/errors</li>
                      <li>• Request human input (optional)</li>
                      <li>• Manage code files</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Configuration:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• Human input mode</li>
                      <li>• Max auto-replies</li>
                      <li>• Code execution environment</li>
                      <li>• Docker or local execution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">💬 The Conversation Loop</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          AutoGen's magic comes from the conversation between agents. Here's how it works:
        </p>

        <Card className="p-6 bg-card border border-border">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">User initiates conversation</h4>
                <p className="text-sm text-foreground/70">UserProxyAgent sends initial message to AssistantAgent</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Assistant thinks & codes</h4>
                <p className="text-sm text-foreground/70">AssistantAgent analyzes problem and generates Python code</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">UserProxy executes</h4>
                <p className="text-sm text-foreground/70">UserProxyAgent runs the code and reports results/errors</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Assistant adapts</h4>
                <p className="text-sm text-foreground/70">If errors, Assistant fixes code. If success, moves to next step or finishes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Repeat or terminate</h4>
                <p className="text-sm text-foreground/70">Loop continues until problem solved or max iterations reached</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🔄</span> Automatic Iteration
            </h4>
            <p className="text-sm text-foreground/70">
              Agents automatically iterate on solutions until success. No manual intervention needed for retry logic.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>🛡️</span> Safe Execution
            </h4>
            <p className="text-sm text-foreground/70">
              Code runs in isolated environments (Docker containers or separate directories) for safety.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>👤</span> Human-in-Loop
            </h4>
            <p className="text-sm text-foreground/70">
              Set <code>human_input_mode</code> to pause for human approval before executing code.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>👥</span> Group Chats
            </h4>
            <p className="text-sm text-foreground/70">
              Create <code>GroupChat</code> with multiple agents. Add manager agent to coordinate conversations.
            </p>
          </Card>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Why This Works</h4>
            <p className="text-sm text-foreground/80">
              The AssistantAgent + UserProxyAgent pattern mirrors how humans solve coding problems: think, code, test, debug, repeat.
              This <strong>natural feedback loop</strong> makes AutoGen incredibly effective for tasks where you don't know the
              solution upfront and need to explore iteratively! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  "autogen-example": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Code Generation Example</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          📈 Stock Price Analysis with AutoGen
        </p>
        <p className="text-foreground/80">
          Let's build an agent that fetches stock data, creates visualizations, and iterates until it works!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">The Task</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          We want to: Download NVIDIA stock data for the last 30 days, create a nice chart, and save it as an image.
          Perfect for AutoGen — requires code generation, library installation, debugging, and iteration!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Complete Implementation</h2>
        <CodeEditor
          code={`import autogen

# Step 1: Configure LLM
config_list = [{
    "model": "gpt-4",
    "api_key": "YOUR_OPENAI_KEY"
}]

# Step 2: Create AssistantAgent (the coder)
assistant = autogen.AssistantAgent(
    name="DataAnalyst",
    system_message="""You are a helpful data analyst. 
    Write clean, well-commented Python code to solve tasks.
    Always install required packages first using pip.""",
    llm_config={
        "config_list": config_list,
        "temperature": 0  # Deterministic for code
    }
)

# Step 3: Create UserProxyAgent (the executor)
user_proxy = autogen.UserProxyAgent(
    name="Executor",
    human_input_mode="NEVER",  # Fully autonomous
    max_consecutive_auto_reply=10,  # Max conversation turns
    is_termination_msg=lambda msg: "TERMINATE" in msg.get("content", ""),
    code_execution_config={
        "work_dir": "coding",  # Directory for code files
        "use_docker": False  # Use local Python (or True for Docker)
    }
)

# Step 4: Start the conversation
user_proxy.initiate_chat(
    assistant,
    message="""
    Fetch NVIDIA (NVDA) stock price data for the last 30 days
    using yfinance. Create a line chart showing the closing price
    over time. Add a title, axis labels, and a grid. Save the 
    plot as 'nvda_stock_price.png'. 
    
    Install any required packages first.
    """
)

print("\\n✅ Task completed! Check coding/nvda_stock_price.png")`}
          language="python"
          title="autogen-stock-analysis.py"
        />
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">📊 What Happens Behind the Scenes</h3>
        <div className="space-y-3 text-sm text-foreground/80">
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded border border-blue-500/20">
            <strong className="text-foreground">Turn 1: Assistant proposes solution</strong>
            <p className="mt-1 text-xs">Writes code to install yfinance & matplotlib, fetch data, create plot</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded border border-green-500/20">
            <strong className="text-foreground">Turn 2: Executor runs code</strong>
            <p className="mt-1 text-xs">Installs packages, executes code, reports success or errors</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded border border-purple-500/20">
            <strong className="text-foreground">Turn 3 (if needed): Assistant fixes bugs</strong>
            <p className="mt-1 text-xs">If errors occurred, Assistant reads error message and writes fixed code</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded border border-orange-500/20">
            <strong className="text-foreground">Turn 4+: Iterate until success</strong>
            <p className="mt-1 text-xs">Keep debugging and trying until plot is created successfully</p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Key Configuration Options</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3">human_input_mode</h4>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>• <code>"NEVER"</code> - Fully autonomous</li>
              <li>• <code>"ALWAYS"</code> - Ask for input every turn</li>
              <li>• <code>"TERMINATE"</code> - Ask only at end</li>
            </ul>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3">code_execution_config</h4>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>• <code>work_dir</code> - Where code runs</li>
              <li>• <code>use_docker</code> - Docker or local</li>
              <li>• <code>timeout</code> - Max execution time</li>
            </ul>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3">max_consecutive_auto_reply</h4>
            <p className="text-sm text-foreground/70">
              Limits conversation turns to prevent infinite loops. Set to 10-20 for most tasks.
            </p>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3">is_termination_msg</h4>
            <p className="text-sm text-foreground/70">
              Function that checks if conversation should end. Look for "TERMINATE" or success indicators.
            </p>
          </Card>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🚀</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Why This Is Powerful</h4>
            <p className="text-sm text-foreground/80 mb-2">
              In just ~30 lines of code, you've built an autonomous system that can:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>✓ Understand natural language instructions</li>
              <li>✓ Write Python code to solve the problem</li>
              <li>✓ Install required packages automatically</li>
              <li>✓ Execute code safely</li>
              <li>✓ Debug and fix errors autonomously</li>
              <li>✓ Iterate until task is complete</li>
            </ul>
            <p className="text-sm text-foreground/80 mt-3">
              This same pattern works for <strong>data analysis, automation, web scraping, file processing</strong>, and more! 🎯
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Pro Tips</h4>
            <div className="text-sm text-foreground/80 space-y-2">
              <div>
                <strong>1. Clear Instructions:</strong> Be specific about what you want. "Create a bar chart with red bars" vs "make a chart"
              </div>
              <div>
                <strong>2. Use Docker:</strong> Set <code>use_docker: True</code> for production (isolates code execution safely)
              </div>
              <div>
                <strong>3. Check work_dir:</strong> All files are saved to <code>work_dir</code>. Check there for outputs!
              </div>
              <div>
                <strong>4. System Messages:</strong> Give agents good context in <code>system_message</code> to guide behavior
              </div>
              <div>
                <strong>5. Temperature=0:</strong> Use low temperature for code generation (more deterministic, fewer bugs)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  "selection-matrix": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Framework Decision Matrix</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🎯 Choosing the Right Framework
        </p>
        <p className="text-foreground/80">
          There's no "best" framework — only the <strong>right framework for your use case</strong>. Here's how they compare!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">📊 Complete Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold">Feature</th>
                <th className="text-left p-4 font-semibold">LangChain</th>
                <th className="text-left p-4 font-semibold">LangGraph</th>
                <th className="text-left p-4 font-semibold">CrewAI</th>
                <th className="text-left p-4 font-semibold">AutoGen</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Workflow Type</td>
                <td className="p-4">Linear, DAG</td>
                <td className="p-4">Cyclical, Graphs</td>
                <td className="p-4">Sequential, Hierarchical</td>
                <td className="p-4">Conversational</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Control Level</td>
                <td className="p-4">⭐⭐⭐⭐ High</td>
                <td className="p-4">⭐⭐⭐⭐⭐ Maximum</td>
                <td className="p-4">⭐⭐ Low</td>
                <td className="p-4">⭐⭐⭐ Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Ease of Use</td>
                <td className="p-4">⭐⭐⭐ Moderate</td>
                <td className="p-4">⭐⭐ Steep</td>
                <td className="p-4">⭐⭐⭐⭐⭐ Easiest</td>
                <td className="p-4">⭐⭐⭐ Moderate</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">State Management</td>
                <td className="p-4">Manual</td>
                <td className="p-4">Explicit & Powerful</td>
                <td className="p-4">Automatic</td>
                <td className="p-4">Implicit</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Code Required</td>
                <td className="p-4">~50 lines</td>
                <td className="p-4">~100 lines</td>
                <td className="p-4">~30 lines</td>
                <td className="p-4">~40 lines</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Learning Curve</td>
                <td className="p-4">Medium</td>
                <td className="p-4">Steep</td>
                <td className="p-4">Gentle</td>
                <td className="p-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Best For</td>
                <td className="p-4">RAG, Chatbots</td>
                <td className="p-4">Complex Agents</td>
                <td className="p-4">Team Workflows</td>
                <td className="p-4">Code Generation</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Maturity</td>
                <td className="p-4">Very Stable</td>
                <td className="p-4">Stable</td>
                <td className="p-4">Growing Fast</td>
                <td className="p-4">Research → Production</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Quick Decision Guide</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">📚</span> Choose LangChain If:
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>✓ Building RAG or chatbot</li>
              <li>✓ Linear/predictable workflow</li>
              <li>✓ Need maximum integrations</li>
              <li>✓ Want battle-tested stability</li>
              <li>✓ Simple → moderate complexity</li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span> Choose LangGraph If:
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>✓ Need loops & cycles</li>
              <li>✓ Complex state management</li>
              <li>✓ Custom control flow</li>
              <li>✓ Human-in-the-loop required</li>
              <li>✓ Maximum flexibility needed</li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">🎭</span> Choose CrewAI If:
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>✓ Team-like workflows</li>
              <li>✓ Content creation pipelines</li>
              <li>✓ Role-based collaboration</li>
              <li>✓ Speed over control</li>
              <li>✓ Quick prototyping</li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">💻</span> Choose AutoGen If:
            </h3>
            <ul className="text-sm text-foreground/70 space-y-2">
              <li>✓ Code generation & execution</li>
              <li>✓ Data analysis tasks</li>
              <li>✓ Exploratory problem-solving</li>
              <li>✓ Trial-and-error debugging</li>
              <li>✓ Python-centric workflows</li>
            </ul>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-card border border-border">
        <h3 className="text-xl font-semibold mb-4">💡 The Framework Spectrum</h3>
        <div className="space-y-4">
          <div className="relative">
            <div className="flex justify-between items-center mb-2 text-sm font-medium">
              <span>Easy & Fast</span>
              <span>Control & Power</span>
            </div>
            <div className="h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
            <div className="flex justify-between mt-3 text-xs text-foreground/70">
              <span className="flex flex-col items-center">
                <span className="font-semibold">CrewAI</span>
                <span>Least code</span>
              </span>
              <span className="flex flex-col items-center">
                <span className="font-semibold">AutoGen</span>
                <span>Conversational</span>
              </span>
              <span className="flex flex-col items-center">
                <span className="font-semibold">LangChain</span>
                <span>Balanced</span>
              </span>
              <span className="flex flex-col items-center">
                <span className="font-semibold">LangGraph</span>
                <span>Most control</span>
              </span>
            </div>
          </div>
          <p className="text-sm text-foreground/70 text-center mt-4">
            ← <strong>Faster development, less control</strong> vs <strong>More control, more code</strong> →
          </p>
        </div>
      </Card>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Pro Tip: Mix & Match!</h4>
            <p className="text-sm text-foreground/80">
              The best architectures often <strong>combine multiple frameworks</strong>: Use LangGraph for orchestration,
              CrewAI for specific team tasks, AutoGen for code generation, and LangChain as the foundation.
              Don't feel locked into one choice! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  "selection-scenarios": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Scenario-Based Recommendations</h1>
      <div className="space-y-4">
        <Card className="p-6 bg-card border border-border">
          <h3 className="text-lg font-semibold mb-2">Scenario 1: Simple RAG Chatbot</h3>
          <p className="text-foreground/80 mb-3">Need a chatbot for company documentation</p>
          <p className="text-primary font-semibold">Recommendation: LangChain (LCEL)</p>
          <p className="text-foreground/80 text-sm mt-2">
            This is a classic linear workflow. LCEL provides all necessary components for efficient RAG pipelines.
          </p>
        </Card>
        <Card className="p-6 bg-card border border-border">
          <h3 className="text-lg font-semibold mb-2">Scenario 2: Multi-Step Financial Analysis</h3>
          <p className="text-foreground/80 mb-3">
            Multi-step analysis with API failures, self-correction, and human approval
          </p>
          <p className="text-primary font-semibold">Recommendation: LangGraph</p>
          <p className="text-foreground/80 text-sm mt-2">
            Complex, stateful workflow requiring loops and branching. LangGraph's state machine architecture provides
            explicit control.
          </p>
        </Card>
        <Card className="p-6 bg-card border border-border">
          <h3 className="text-lg font-semibold mb-2">Scenario 3: Marketing Content Pipeline</h3>
          <p className="text-foreground/80 mb-3">Researcher → Writer → Editor workflow</p>
          <p className="text-primary font-semibold">Recommendation: CrewAI</p>
          <p className="text-foreground/80 text-sm mt-2">
            Maps directly to role-based abstractions. Intuitive for team-like workflows.
          </p>
        </Card>
        <Card className="p-6 bg-card border border-border">
          <h3 className="text-lg font-semibold mb-2">Scenario 4: Data Analysis with Code Execution</h3>
          <p className="text-foreground/80 mb-3">Database analysis, pandas operations, data visualization</p>
          <p className="text-primary font-semibold">Recommendation: AutoGen</p>
          <p className="text-foreground/80 text-sm mt-2">
            Native code execution and debugging loop. Unmatched for data analysis and software development tasks.
          </p>
        </Card>
      </div>
    </div>
  ),
  "future-evolution": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">The Evolution of AI Agents</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🚀 From Shallow Loops to Deep, Persistent Agents
        </p>
        <p className="text-foreground/80">
          The field is rapidly evolving from simple reactive systems to sophisticated, proactive architectures that work over hours or days!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">The Agent Evolution Timeline</h2>
        <div className="space-y-6">

          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-xl font-bold">
                1.0
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Agents 1.0: Shallow Loop (2023)</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  The first generation — simple ReAct loops that work great for quick tasks but struggle with complexity.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Architecture:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• Single agent in stateless loop</li>
                      <li>• All logic in LLM context window</li>
                      <li>• Implicit planning (CoT)</li>
                      <li>• No persistent memory</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Limitations:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• Context window limits</li>
                      <li>• Forgets past iterations</li>
                      <li>• No long-term planning</li>
                      <li>• Can't handle multi-day tasks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl text-primary">↓</span>
              <span className="text-sm text-foreground/70 font-medium">Evolving to...</span>
              <span className="text-3xl text-primary">↓</span>
            </div>
          </div>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-xl font-bold">
                2.0
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Agents 2.0: Deep Agents (2024+)</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  The future — sophisticated agents that plan, persist, delegate, and work on complex tasks over days or weeks.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Architecture:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• Decoupled planning & execution</li>
                      <li>• Explicit persistent plans</li>
                      <li>• Hierarchical agent delegation</li>
                      <li>• External long-term memory</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-background/50 rounded">
                    <strong className="text-foreground">Capabilities:</strong>
                    <ul className="mt-1 space-y-1 text-foreground/60">
                      <li>• Multi-day task execution</li>
                      <li>• Context retention across sessions</li>
                      <li>• Dynamic replanning</li>
                      <li>• Learns from experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🔑 Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-lg">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold">Aspect</th>
                <th className="text-left p-4 font-semibold">Agents 1.0 (Shallow)</th>
                <th className="text-left p-4 font-semibold">Agents 2.0 (Deep)</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Planning</td>
                <td className="p-4">Implicit (in context)</td>
                <td className="p-4">Explicit & Persistent</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Memory</td>
                <td className="p-4">Only context window</td>
                <td className="p-4">External vector DB + KG</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Task Duration</td>
                <td className="p-4">Minutes to hours</td>
                <td className="p-4">Hours to days/weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-4 font-medium">Agents</td>
                <td className="p-4">Single or few</td>
                <td className="p-4">Hierarchical teams</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Learning</td>
                <td className="p-4">No retention</td>
                <td className="p-4">Learns & improves</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🌟 Emerging Trends</h2>
        <div className="space-y-3">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Cognitive Architectures</h4>
                <p className="text-sm text-foreground/70">
                  Separate systems for perception, reasoning, memory, and action — mimicking human cognition.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Self-Improving Agents</h4>
                <p className="text-sm text-foreground/70">
                  Agents that learn from experience, fine-tune their strategies, and get better over time.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Org-Scale Agent Networks</h4>
                <p className="text-sm text-foreground/70">
                  Hundreds of specialized agents working together like a company, with managers, specialists, and coordinators.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Agentic Operating Systems</h4>
                <p className="text-sm text-foreground/70">
                  Full OS-level integration where agents manage your digital life, schedule, files, and workflows.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🔮</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">The Future is Agentic</h4>
            <p className="text-sm text-foreground/80">
              We're moving from <strong>"AI as tool"</strong> → <strong>"AI as teammate"</strong> → <strong>"AI as autonomous workforce"</strong>.
              The agents you build today are the foundation for tomorrow's AI-powered organizations.
              The frameworks we've covered are just the beginning — stay curious and keep building! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  "future-hybrid": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">The Power of Hybrid Systems</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          🔗 Best of All Worlds: Combining Frameworks
        </p>
        <p className="text-foreground/80">
          The most powerful systems don't use just one framework — they <strong>combine multiple frameworks</strong>, using the right tool for each job!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Why Hybrid?</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Real-world applications are complex. A single framework often can't handle everything efficiently.
          Hybrid architectures let you use <strong>LangGraph for orchestration</strong>, <strong>CrewAI for team tasks</strong>,
          <strong>AutoGen for code</strong>, and <strong>LangChain as glue</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>❌</span> Single Framework Approach
            </h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Force-fit all tasks into one paradigm</li>
              <li>• Compromise on control OR simplicity</li>
              <li>• Lots of workarounds & boilerplate</li>
              <li>• One size doesn't fit all</li>
            </ul>
          </Card>

          <Card className="p-5 bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span>✅</span> Hybrid Approach
            </h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Right tool for each specific task</li>
              <li>• Control where needed, speed elsewhere</li>
              <li>• Cleaner, more maintainable code</li>
              <li>• Best of all frameworks</li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🏗️ Example Hybrid Architecture</h2>
        <Card className="p-6 bg-card border border-border">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <span className="text-purple-600">LangGraph</span> — Orchestration Layer
                </h4>
                <p className="text-sm text-foreground/70">
                  Manages overall workflow, state, and routing. Handles complex branching, human-in-the-loop, and error recovery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <span className="text-green-600">CrewAI</span> — Specialized Teams
                </h4>
                <p className="text-sm text-foreground/70">
                  Handles structured sub-tasks like "research and write report" or "analyze and summarize". Quick to build, easy to maintain.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <span className="text-orange-600">AutoGen</span> — Code & Analysis
                </h4>
                <p className="text-sm text-foreground/70">
                  Tackles computational tasks: data analysis, visualization, code generation, debugging.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <span className="text-blue-600">LangChain</span> — Foundation
                </h4>
                <p className="text-sm text-foreground/70">
                  Provides RAG pipelines, vector stores, LLM integrations, and reusable chains that all frameworks can use.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">💼 Real-World Example</h2>
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-3">🏢 Enterprise Data Analysis Platform</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-background/50 rounded">
              <strong className="text-purple-600">LangGraph Master Controller:</strong>
              <p className="text-foreground/70 mt-1">Manages workflow: Authentication → Data Retrieval → Analysis → Report → Approval</p>
            </div>
            <div className="p-3 bg-background/50 rounded">
              <strong className="text-blue-600">LangChain RAG:</strong>
              <p className="text-foreground/70 mt-1">Retrieves relevant company data, docs, and historical reports</p>
            </div>
            <div className="p-3 bg-background/50 rounded">
              <strong className="text-orange-600">AutoGen Data Team:</strong>
              <p className="text-foreground/70 mt-1">Writes SQL, fetches data, creates visualizations with Python</p>
            </div>
            <div className="p-3 bg-background/50 rounded">
              <strong className="text-green-600">CrewAI Writing Team:</strong>
              <p className="text-foreground/70 mt-1">Analyst summarizes findings → Writer creates executive report → Editor polishes</p>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">🎯 Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Right Tool for the Job</h4>
                <p className="text-sm text-foreground/70">
                  Use each framework's strengths — don't force everything into one paradigm
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Balance Control & Speed</h4>
                <p className="text-sm text-foreground/70">
                  Fine-grained control where it matters, high-level abstractions where speed is key
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔧</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Maintainable Architecture</h4>
                <p className="text-sm text-foreground/70">
                  Each part is simpler because it's using the right abstraction level
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Easy to Scale</h4>
                <p className="text-sm text-foreground/70">
                  Add new capabilities by plugging in the appropriate framework
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Start Simple, Evolve to Hybrid</h4>
            <p className="text-sm text-foreground/80">
              Don't over-engineer from day one! Start with <strong>one framework</strong> that fits your core use case.
              As requirements grow, <strong>add complementary frameworks</strong> for specific tasks.
              Your architecture should evolve naturally based on real needs, not hypotheticals. 🚀
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">🎉 You're Ready to Build!</h3>
          <p className="text-foreground/80 mb-4">
            You now understand <strong>AI Agents, ReAct, RAG</strong>, and all four major frameworks:
            <strong>LangChain, LangGraph, CrewAI, and AutoGen</strong>.
          </p>
          <p className="text-lg font-semibold text-primary">
            The future of AI is agentic — and you're equipped to build it! 🚀
          </p>
        </div>
      </div>
    </div>
  ),
  "references": (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">📖 References</h1>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <p className="text-lg font-semibold text-foreground mb-2">
          📚 Your Learning Journey Continues Here
        </p>
        <p className="text-foreground/80">
          Explore official documentation, research papers, tools, and community resources to deepen your AI agent expertise.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Framework Documentation and Guides</h2>

        <div className="space-y-4">
          <Card className="p-5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>📚</span> 1. LangChain
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <strong>Official Documentation:</strong>{" "}
                <a href="https://python.langchain.com/" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  python.langchain.com
                </a>
              </li>
              <li>
                <strong>LangChain Hub:</strong>{" "}
                <a href="https://smith.langchain.com/hub" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  smith.langchain.com/hub
                </a>
              </li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🎯</span> 2. LangGraph
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <strong>Official Documentation:</strong>{" "}
                <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  langchain-ai.github.io/langgraph
                </a>
              </li>
              <li>
                <strong>LangGraph Tutorials:</strong>{" "}
                <a href="https://github.com/langchain-ai/langgraph" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  github.com/langchain-ai/langgraph
                </a>
              </li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>🎭</span> 3. CrewAI
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <strong>Official Documentation:</strong>{" "}
                <a href="https://docs.crewai.com/" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  docs.crewai.com
                </a>
              </li>
              <li>
                <strong>CrewAI GitHub:</strong>{" "}
                <a href="https://github.com/joaomdmoura/crewai" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  github.com/joaomdmoura/crewai
                </a>
              </li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span>💻</span> 4. AutoGen
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <strong>Official Documentation:</strong>{" "}
                <a href="https://microsoft.github.io/autogen/" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  microsoft.github.io/autogen
                </a>
              </li>
              <li>
                <strong>Microsoft Research Paper:</strong> Wu, Q., et al. (2023). "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation." <em>arXiv preprint arXiv:2308.08155</em>.
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Vector Databases and Embeddings</h2>
        <Card className="p-5 bg-card border border-border">
          <ol className="space-y-2 text-sm text-foreground/80 list-decimal list-inside">
            <li>
              <strong>Chroma:</strong>{" "}
              <a href="https://docs.trychroma.com/" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                docs.trychroma.com
              </a>
            </li>
            <li>
              <strong>Pinecone:</strong>{" "}
              <a href="https://docs.pinecone.io/" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                docs.pinecone.io
              </a>
            </li>
            <li>
              <strong>FAISS:</strong>{" "}
              <a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                github.com/facebookresearch/faiss
              </a>
            </li>
            <li>
              <strong>Weaviate:</strong>{" "}
              <a href="https://weaviate.io/developers/weaviate" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                weaviate.io/developers/weaviate
              </a>
            </li>
          </ol>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Key Libraries and Tools</h2>
        <Card className="p-5 bg-card border border-border">
          <ol className="space-y-2 text-sm text-foreground/80 list-decimal list-inside">
            <li>
              <strong>OpenAI API:</strong>{" "}
              <a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                platform.openai.com/docs
              </a>
            </li>
            <li>
              <strong>Anthropic Claude:</strong>{" "}
              <a href="https://docs.anthropic.com/" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                docs.anthropic.com
              </a>
            </li>
            <li>
              <strong>Hugging Face Transformers:</strong>{" "}
              <a href="https://huggingface.co/docs/transformers" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                huggingface.co/docs/transformers
              </a>
            </li>
            <li>
              <strong>Streamlit:</strong>{" "}
              <a href="https://docs.streamlit.io/" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                docs.streamlit.io
              </a>
            </li>
            <li>
              <strong>FastAPI:</strong>{" "}
              <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                fastapi.tiangolo.com
              </a>
            </li>
          </ol>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">GitHub Repositories</h2>
        <Card className="p-5 bg-card border border-border">
          <ol className="space-y-2 text-sm text-foreground/80 list-decimal list-inside">
            <li>
              <strong>LangChain Examples:</strong>{" "}
              <a href="https://github.com/langchain-ai/langchain" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                github.com/langchain-ai/langchain
              </a>
            </li>
            <li>
              <strong>Awesome LangChain:</strong>{" "}
              <a href="https://github.com/kyrolabs/awesome-langchain" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                github.com/kyrolabs/awesome-langchain
              </a>
            </li>
            <li>
              <strong>AutoGen Examples:</strong>{" "}
              <a href="https://github.com/microsoft/autogen" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                github.com/microsoft/autogen
              </a>
            </li>
            <li>
              <strong>CrewAI Examples:</strong>{" "}
              <a href="https://github.com/joaomdmoura/crewai-examples" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline">
                github.com/joaomdmoura/crewai-examples
              </a>
            </li>
          </ol>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">🎓 Keep Learning, Keep Building!</h3>
          <p className="text-foreground/80">
            The AI agent ecosystem is rapidly evolving. Bookmark these resources, join communities,
            and stay curious. Your journey has just begun! 🚀
          </p>
        </div>
      </div>
    </div>
  ),
}

// Group subsections by main section
const sectionGroups: Record<string, string[]> = {
  "introduction": ["introduction", "intro-agents", "intro-llm", "intro-tools", "intro-memory", "intro-loop"],
  "react-framework": ["react-intro", "react-loop", "react-benefits"],
  "rag": ["rag-what", "rag-architecture", "rag-why"],
  "langchain": ["langchain-intro", "langchain-lcel", "langchain-react-agent", "langchain-rag"],
  "langgraph": ["langgraph-intro", "langgraph-primitives", "langgraph-react", "langgraph-multi"],
  "crewai": ["crewai-intro", "crewai-philosophy", "crewai-example"],
  "autogen": ["autogen-intro", "autogen-concepts", "autogen-example"],
  "framework-selection": ["selection-matrix", "selection-scenarios"],
  "future": ["future-evolution", "future-hybrid"],
  "references": ["references"],
}

// Navigation order (main sections)
const mainSectionOrder = [
  "introduction",
  "react-framework",
  "rag",
  "langchain",
  "langgraph",
  "crewai",
  "autogen",
  "framework-selection",
  "future",
  "references",
]

export default function MainContent({ activeSection, onNavigate }: MainContentProps) {
  // Find which main section the active subsection belongs to
  const currentMainSection = Object.keys(sectionGroups).find(key =>
    sectionGroups[key].includes(activeSection)
  ) || "introduction"

  const currentSectionIndex = mainSectionOrder.indexOf(currentMainSection)
  const nextMainSection = currentSectionIndex < mainSectionOrder.length - 1 ? mainSectionOrder[currentSectionIndex + 1] : null
  const prevMainSection = currentSectionIndex > 0 ? mainSectionOrder[currentSectionIndex - 1] : null

  // Get all subsections for current main section
  const currentSubsections = sectionGroups[currentMainSection] || []

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-12 pt-4">
        {/* Show all subsections of current main section */}
        {currentSubsections.map((subsectionId, index) => {
          const content = contentMap[subsectionId]
          if (!content) return null

          return (
            <div
              key={subsectionId}
              id={`section-${subsectionId}`}
              className="mb-16 scroll-mt-20"
            >
              {content}
              {index < currentSubsections.length - 1 && (
                <div className="h-px bg-border my-12"></div>
              )}
            </div>
          )
        })}

        {/* Navigation Buttons */}
        {onNavigate && (
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
            {prevMainSection ? (
              <button
                onClick={() => onNavigate(sectionGroups[prevMainSection][0])}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
              >
                <span>←</span>
                <span>Previous Section</span>
              </button>
            ) : (
              <div></div>
            )}

            {nextMainSection ? (
              <button
                onClick={() => onNavigate(sectionGroups[nextMainSection][0])}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all font-medium"
              >
                <span>Next Section</span>
                <span>→</span>
              </button>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
