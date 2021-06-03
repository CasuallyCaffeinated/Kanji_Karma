"""modifed column in Deck from usersId to userId

Revision ID: 5b45590d80b1
Revises: 0e432a6642ac
Create Date: 2021-06-03 12:39:46.535341

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5b45590d80b1'
down_revision = '0e432a6642ac'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('decks', sa.Column('userId', sa.Integer(), nullable=False))
    op.drop_constraint('decks_usersId_fkey', 'decks', type_='foreignkey')
    op.create_foreign_key(None, 'decks', 'users', ['userId'], ['id'])
    op.drop_column('decks', 'usersId')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('decks', sa.Column('usersId', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'decks', type_='foreignkey')
    op.create_foreign_key('decks_usersId_fkey', 'decks', 'users', ['usersId'], ['id'])
    op.drop_column('decks', 'userId')
    # ### end Alembic commands ###